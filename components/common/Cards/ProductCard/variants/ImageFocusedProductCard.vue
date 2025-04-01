<template>
  <div
    class="flex flex-col items-center p-4 w-60 my-2 md:my-10 gap-4 font-sans border-2 rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
  >
    IMG FOCUSED
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
</script>
