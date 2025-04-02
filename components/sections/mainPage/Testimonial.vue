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
        <CardWithIcon
          v-for="(item, index) in testimonial.testimonials"
          :key="index"
          :description="item.text"
          :image="item.icon"
          :title="item.title"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfoCard } from "~/types/mainPage";
import Title from "~/components/common/Title/Title.vue";
import CardWithIcon from "~/components/common/Cards/CardWithIcon.vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  testimonial: {
    title: string;
    image: string;
    testimonials: InfoCard[];
  };
}>();
</script>
