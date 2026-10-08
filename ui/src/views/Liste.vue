<script setup lang="ts">
import ArticlePage from "@/components/ArticlePage.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {getData} from "@/utils/api.js"
import ArticleSkeleton from "@/components/ArticleSkeleton.vue";

const loading = ref(true);
const error = ref(false);
const firstPage = ref({_embedded: {}, _links: {}, page: {}});

onMounted( async () => {
  await getData("/articles")
    .then(data => {
      error.value = false;
      firstPage.value = data
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
  <div class="flex flex-col gap-4 w-full content-stretch p-10">
    <transition name="fade" mode="out-in">
      <div v-if="loading" class="flex flex-col gap-4">
        <ArticleSkeleton></ArticleSkeleton>
        <ArticleSkeleton></ArticleSkeleton>
        <ArticleSkeleton class="gradient-fade"></ArticleSkeleton>
      </div>
      <p v-else-if="error">Hups, her har det skjedd en feil!</p>
      <ArticlePage v-else v-bind="firstPage"/>
    </transition>
  </div>
</template>

<style scoped>
</style>
