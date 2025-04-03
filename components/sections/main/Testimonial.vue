<template>
  <div class="items-center">
    <div class="md:flex justify-center items-center gap-16 mb-6">
      <div class="p-4 w-full">
        <NuxtImg
          :src="testimonial.image"
          :alt="testimonial.title"
          class="w-full h-[500px] mt-4 rounded-3xl"
        />
      </div>
      <div class="flex flex-col items-start gap-4">
        <Title :title="testimonial.title" title-size="text-4xl" />
        <InfoCard
          v-for="item in testimonial.testimonials"
          :key="item.id"
          :description="item.text"
          :image="item.icon"
          :title="item.title"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfoCardItem } from "~/types/mainPage";
import Title from "~/components/common/Title/Title.vue";
import InfoCard from "~/components/common/Cards/InfoCard/InfoCard.vue";

const { testimonial } = defineProps<{
  testimonial: {
    title: string;
    image: string;
    testimonials: InfoCardItem[];
  };
}>();
</script>
