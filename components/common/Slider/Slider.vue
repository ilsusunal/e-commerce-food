<template>
  <div class="my-8">
    <Swiper
      :slides-per-view="1"
      :space-between="16"
      :breakpoints="{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }"
      navigation
      pagination
    >
      <!-- <SwiperSlide v-for="(product, i) in products" :key="i">
          <ProductCard :product="product" />
        </SwiperSlide> -->
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>
