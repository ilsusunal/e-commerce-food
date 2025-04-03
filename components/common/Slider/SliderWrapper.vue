<template>
  <div class="w-full relative">
    <button
      ref="prevEl"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-12 h-12 bg-neutralLighter/50 p-2 hover:bg-accent"
    >
      ◀
    </button>
    <button
      ref="nextEl"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-12 h-12 bg-neutralLighter/50 p-2 hover:bg-accent"
    >
      ▶
    </button>

    <Swiper
      :slides-per-view="1"
      :space-between="16"
      :breakpoints="{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }"
      :navigation="{
        nextEl: nextEl,
        prevEl: prevEl,
      }"
      @swiper="(swiper) => (swiperRef = swiper)"
      class="w-full h-full"
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, onMounted } from "vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = defineProps<{
  items: any[];
}>();

const swiperRef = ref();
const prevEl = ref();
const nextEl = ref();
</script>
