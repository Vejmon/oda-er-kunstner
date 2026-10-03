<script setup>

const props = defineProps({
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
    default: ''
  },
  link: {
    type: String,
    required: false,
  }
});

</script>

<template>
  <div class="flex flex-col p-2 max-w-2xl ring-2 rounded-lg"
       :class="props.link ? 'cursor-pointer hover:scale-103 transition-transform duration-300' : ''"
        @click="props.link ? window.location.href = props.link : ''"
  >
    <div class="flex flex-col bg-red-900 p-2">
      <div class="text-2xl">
        {{ props.title }}
      </div>
      <div class="text-lg pt-2 pb-2">
        {{ props.subtitle }}
      </div>
      <div class="ring-2 rounded-lg p-2 mt-2 bg-white text-black">
        <div class="text-base">
          {{ props.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>