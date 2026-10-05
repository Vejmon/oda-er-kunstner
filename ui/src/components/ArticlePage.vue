<script setup>
import { useTemplateRef, onMounted, onUnmounted, computed, ref} from 'vue';
import ArticlePreview from "@/components/ArticlePreview.vue";

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

</script>


<template>
  <ul class="flex flex-col gap-4">
    <li v-for="(item, index) in props._embedded.articles" :key="index">
        <ArticlePreview :id="item.id" :subtitle="item.subtitle" :title="item.title" :text="item.text" :link="item._links.self"/>
    </li>
  </ul>
</template>



<style scoped>

</style>