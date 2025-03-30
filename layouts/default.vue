<template>
  <div>
    <Header />
    <main class="min-h-screen">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from "~/components/layout/Header.vue";
</script>
