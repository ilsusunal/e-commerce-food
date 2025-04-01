<template>
  <div
    class="relative flex flex-col px-4 py-1 w-[220px] h-[460px] gap-3 font-sans border-2 rounded-xl"
  >
    <div
      v-if="label"
      :class="[
        'absolute top-0 left-0 text-white text-xs px-4 py-2 rounded-none rounded-br-xl rounded-tl-xl ',
        labelClass,
      ]"
    >
      {{ label }}
    </div>
    <NuxtImg
      :src="productImages"
      :alt="productName"
      class="w-60 h-auto object-cover mt-4"
    />
    <div class="flex flex-col gap-1">
      <h4 class="text-xs text-neutralLight">{{ productBrand }}</h4>
      <h1 class="text-sm text-wrap font-semibold">{{ productName }}</h1>
      <p class="flex items-center text-sm">
        <Icon name="material-symbols:star" class="mr-2 text-primary" />{{
          score
        }}
      </p>
    </div>
    <div class="flex items-center gap-4 font-semibold mt-auto">
      <p class="text-sm text-secondary">$ {{ discountedPrice }}</p>
      <p class="text-neutralLighter text-xs line-through">$ {{ price }}</p>
    </div>
    <div class="flex flex-col gap-2 mt-auto">
      <div class="w-full bg-neutralLighter/50 rounded h-1 overflow-hidden">
        <div class="bg-accent h-1" :style="{ width: '50%' }"></div>
      </div>
      <p class="text-xs">Sold: 90/120</p>
    </div>
    <div class="mt-auto">
      <button
        class="w-full text-sm bg-accent text-white rounded py-3 hover:bg-primary"
      >
        Add To Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/mainPage";

const {
  productName,
  price,
  discountedPrice,
  discountAmunt,
  productBrand,
  score,
  label,
  productImages,
} = defineProps<Product>();

const labelClass = computed(() => {
  switch (label) {
    case "New":
      return "bg-sky-500";
    case "Best Sale":
      return "bg-orange-400";
    case "Sale":
      return "bg-sky-500";
    case "Save 35%":
      return "bg-secondary";
    default:
      return "bg-primary";
  }
});
</script>
