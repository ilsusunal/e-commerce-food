<template>
  <div>
    <Header />
    <main class="min-h-screen">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>
