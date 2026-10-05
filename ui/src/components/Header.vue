<script setup>

const props = defineProps({
  to: {
    type: String,
    required: false,
    default: '/'
  }
});

</script>

<template>
  <div class="app-header">
    <div class="flex flex-row justify-center gap-4 p-2">
        <a href="/" class="link-hover hover:text-gray-300">
          Hjem
        </a>
        <a href="/nyheter" class="link-hover hover:text-gray-300">
          nyheter
        </a>
        <a href="/kontakt" class="link-hover hover:text-gray-300">
          kontakt
        </a>
      </div>
      <div>
      </div>
  </div>
</template>

<style scoped>

</style>