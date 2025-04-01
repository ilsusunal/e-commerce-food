<template>
  <div class="md:my-20">
    <div class="md:flex justify-center gap-12 mb-6">
      <NuxtImg
        :src="testimonial.image"
        :alt="testimonial.title"
        class="w-[540px] h-auto object-cover mt-4 rounded-xl"
      />
      <Title :title="testimonial.title" titleSize="text-3xl" />
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
