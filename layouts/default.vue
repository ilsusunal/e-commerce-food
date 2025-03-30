<template>
  <div>
    <Header />
    <Banner />
    <main class="min-h-screen">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from "~/components/layout/Header.vue";
import Banner from "~/components/layout/Banner.vue";
</script>
