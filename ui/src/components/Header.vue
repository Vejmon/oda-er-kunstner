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
  <div class="flex flex-row justify-between p-2">
    <div class="flex flex-col items-center">
      <a :href="to">
        <div class="max-w-15">
            Her kan du ha logoen din!
        </div>
      </a>
    </div>
    <div class="ring-2 rounded-lg p-2 text-4xl">
        Meir kunst!!1!
    </div>
  </div>
</template>

<style scoped>

</style>