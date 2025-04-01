<template>
  <div class="my-10">
    <div class="justify-center md:flex md:justify-between gap-4 mb-6">
      <Title :title="testimonial.title" titleSize="text-3xl" />
      <!-- <Tabs v-model="selectedTab" :tabs="tabs" /> -->
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4"></div>
  </div>
</template>

<script setup lang="ts">
import Title from "~/components/common/Title/Title.vue";
import type { InfoCard } from "~/types/mainPage";

const props = defineProps<{
  testimonial: {
    title: string;
    image: string;
    testimonials: InfoCard[];
  };
}>();
</script>
