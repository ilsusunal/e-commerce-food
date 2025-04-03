<template>
  <div class="relative w-full z-0 min-h-[480px]">
    <button
      type="button"
      ref="prevEl"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutralLighter/50 p-4 rounded-full w-8 h-8 flex items-center justify-center"
    >
      <Icon
        name="material-symbols:arrow-back-ios-rounded"
        class="w-5 h-5 text-black"
      />
    </button>

    <button
      ref="nextEl"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutralLighter/50 p-4 rounded-full w-8 h-8 flex items-center justify-center"
    >
      <Icon
        name="material-symbols:arrow-forward-ios-rounded"
        class="w-5 h-5 text-black"
      />
    </button>

    <Swiper
      class="w-full relative block z-0"
      :slides-per-view="2"
      :space-between="16"
      :breakpoints="{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }"
      :navigation="{ nextEl: nextEl, prevEl: prevEl }"
      @swiper="(swiper) => (swiperRef = swiper)"
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
import "swiper/css";
import "swiper/css/navigation";

const props = defineProps<{
  items: any[];
}>();

const swiperRef = ref();
const prevEl = ref();
const nextEl = ref();
</script>
