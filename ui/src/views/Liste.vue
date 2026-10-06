<script setup lang="ts">
import ArticlePage from "@/components/ArticlePage.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {getData} from "@/utils/api.js"
import ArticleSkeleton from "@/components/ArticleSkeleton.vue";

const loading = ref(true);
const error = ref(false);
const firstPage = ref(null)

onMounted( async () => {
  firstPage.value = await getData("/articles")
    .then(data => {
      error.value = false;
      return data;
  })
    .catch(() =>{
      error.value = true;
  })
    .finally(() =>{
      loading.value = false;
  })
});

onUnmounted(() =>{
  loading.value = true
})

</script>

<template>
  <div>
    <p v-if="loading" class="flex flex-col">
      <ArticleSkeleton></ArticleSkeleton>
      <ArticleSkeleton></ArticleSkeleton>
      <ArticleSkeleton></ArticleSkeleton>
    </p>
      <p v-else-if="error">Hups, her har det skjedd en feil!</p>
    <ArticlePage v-if="firstPage" v-bind="firstPage"></ArticlePage>
  </div>
</template>

<style scoped>
</style>
