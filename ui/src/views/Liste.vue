<script setup lang="ts">
import ArticlePage from "@/components/ArticlePage.vue";
import {ref} from "vue";
import {getData} from "@/utils/api.js"
import ArticlePreview from "@/components/ArticlePreview.vue";
const loading = ref(true);
const firstPage = ref(await getData("/articles"))
console.log(firstPage.value)
loading.value = false
</script>

<template>
  <div>
    altså... den er lastet?
  </div>
  <div>
    lista loader?
    <p v-if="loading">Loading...</p>
  <!-- <p v-else-if="error">Error: {{ error }}</p> -->
    <ArticlePage v-else :_embedded="firstPage._embedded" :_links="firstPage._links" :page="firstPage.page"></ArticlePage>
  </div>
</template>

<style scoped>
</style>
