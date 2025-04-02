<template>
  <div>
    <Header />
    <main class="min-h-screen">
      <NuxtPage />
    </main>
    <Footer :footer="footer" />
  </div>
</template>

<script setup>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
import { mockMainPageData } from "~/mock/mainPage";

const footer = mockMainPageData.footer;
</script>
