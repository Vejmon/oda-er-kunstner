<script setup>
import { useTemplateRef, onMounted, onUnmounted, computed, ref} from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    default: '/'
  },
  subtitle: {
    type: String,
    required: false,
    default: ''
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  }
});

let observer = null
const articleText = useTemplateRef('articleText')
const overflows = ref(false)

function check() {
  if (!articleText.value) return
  const outer = articleText.value.parentElement
  overflows.value = articleText.value.scrollHeight > articleText.value.parentElement.clientHeight
}

onMounted(() => {
  check()
  observer = new ResizeObserver(check)
  observer.observe(articleText.value)
})

onUnmounted(() => observer?.disconnect())

</script>


<template>
  <div class="flex flex-col p-2 max-w-2xl ring-2 rounded-lg min-w-60"
       :class="props.link ? 'link-hover' : ''"
       @click="props.link ? window.location.href = props.link : ''"
  >
    <div class="flex flex-col p-2 rounded-lg">
      <div class="text-2xl font-bold">
        {{ props.title }}
      </div>
      <div class="text-base pt-2 pb-2">
        {{ props.subtitle }}
      </div>
      <div
           class="rounded-lg max-h-32 overflow-y-hidden"
           :class="overflows ? 'gradient-fade' : ''"
      >
        <div ref="articleText" class="text-base">
          {{ props.text }}
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>