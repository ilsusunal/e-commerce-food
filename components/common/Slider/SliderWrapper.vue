<template>
  <div class="relative w-full z-0 min-h-[480px]">
    <button
      type="button"
      ref="prevEl"
      class="absolute left-2 top-1/3 -translate-y-1/2 z-10 bg-neutralLighter/50 p-4 rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white"
    >
      ←
    </button>

    <button
      ref="nextEl"
      class="absolute right-2 top-1/3 -translate-y-1/2 z-10 bg-neutralLighter/50 p-4 rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white"
    >
      →
    </button>

    <Swiper
      ref="swiperRef"
      :modules="[Navigation]"
      :slides-per-view="2"
      :space-between="16"
      :breakpoints="{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }"
      :navigation="{
        prevEl: prevEl,
        nextEl: nextEl,
      }"
      :init="false"
      class="w-full relative block z-0"
    >
      <SwiperSlide
        v-for="(item, index) in items"
        :key="index"
        class="h-full box-border"
      >
        <slot :item="item" :index="index" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const { items } = defineProps<{
  items: any[];
}>();

const swiperRef = ref();
const prevEl = ref<HTMLElement | null>(null);
const nextEl = ref<HTMLElement | null>(null);
</script>
