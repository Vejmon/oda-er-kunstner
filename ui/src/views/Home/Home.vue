<script setup>
import Header from "@/components/Header.vue";

</script>

<template>
  <header>
    <Header to="/lb" link-name="lbNewKusk"/>
  </header>
  <main>
  <div>
    Hej fra Home
  </div>
    <router-view />
  </main>

</template>

<style scoped>

</style>