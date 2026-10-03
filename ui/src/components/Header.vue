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
    <div class="flex flex-row justify-center gap-2 p-2">
        <a href="/" class="link-hover">
          Hjem
        </a>
        <a href="/nyheter" class="link-hover">
          nyheter
        </a>
        <a href="/kontakt" class="link-hover">
          kontakt
        </a>
      </div>
      <div>
      </div>
  </div>
</template>

<style scoped>

</style>