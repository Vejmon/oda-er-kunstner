<script setup>
import Header from "@/components/Header.vue";

</script>

<template>
  <header>
    <Header class="app-header" to="/lb" link-name="lbNewKusk"/>
  </header>
  <main>
  <div>
    Hej fra Admin
  </div>
    <router-view />
  </main>

</template>

<style scoped>

</style>