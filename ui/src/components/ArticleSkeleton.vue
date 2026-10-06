<script setup>

const randomCol1 = Math.floor(Math.random() * 5) + 2
const randomCol2 = Math.floor(Math.random() * 3) + 1
const randomCol3 = Math.floor(Math.random() * 4) + 1

</script>

<template>
  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-5">
    <div class="flex animate-pulse space-4">
      <div class="flex-1">
        <div class="h-4 rounded bg-gray-200"></div>
        <div class="">
          <div :class="`grid grid-cols-${randomCol1} py-2`">
            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
          </div>
          <div :class="`grid grid-cols-${randomCol2} py-2 gap-2`">
            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
          </div>
          <div :class="`grid grid-cols-${randomCol3} py-2 gap-2`">
            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
          </div>

          <div class="h-2 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>