<script setup>
import { useTemplateRef, onMounted, onUnmounted, computed, ref} from 'vue';
import { useInfiniteScroll } from '@vueuse/core';
import ArticlePreview from "@/components/ArticlePreview.vue";
import {getData} from "@/utils/api.js";

const props = defineProps({
  _embedded: {
    type: Object,
    required: true,
  },
  _links: {
    type: Object,
    required: true,
  },
  page: {
    type: Object,
    required: true,
  },
});

const listElement = ref(null);
const isLoading = ref(false);
const currentPage = ref(props.page.number);
const data = ref(props._embedded.articles)

// Define the function to load more data
const loadMore = async () => {
  if (isLoading.value) return;
  isLoading.value = true;
  currentPage.value = currentPage.value + 1;
  const url = new URL(props._links.self.href)
  url.searchParams.set("page", currentPage.value);
  console.log('url', url)

  const newItems = await getData(url.pathname + url.search)

  data.value.push(...newItems._embedded.articles);

  isLoading.value = false;
};

// Initialize infinite scroll
useInfiniteScroll(
  listElement,
  loadMore,
  { distance: 10 } // Trigger load when 10px from bottom
);

</script>


<template>
  <ul ref="listElement" class="flex flex-col gap-4">
    <li v-for="(item, index) in data" :key="index">
        <ArticlePreview v-bind="item" :link="item._links.self"/>
    </li>
  </ul>
</template>



<style scoped>

</style>