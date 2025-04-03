<template>
  <div class="relative w-64 mb-20">
    <NuxtImg
      :src="productImages"
      :alt="productName"
      class="w-64 h-64 object-cover mt-4 z-0 rounded-xl"
    />

    <div
      class="absolute left-1/2 -translate-x-1/2 -bottom-24 w-[240px] h-[180px] p-4 font-sans shadow-xl rounded-xl bg-white z-10"
    >
      <div class="flex flex-col gap-1 h-full">
        <div class="flex flex-col gap-2">
          <h1 class="text-sm font-semibold">{{ productName }}</h1>
          <p class="flex items-center text-sm">
            <Icon name="material-symbols:star" class="mr-2 text-primary" />{{
              score
            }}
          </p>
          <h4 class="text-xs text-neutralLight">by {{ productBrand }}</h4>
        </div>

        <div class="flex justify-between mt-auto">
          <div class="flex items-center gap-4 font-semibold">
            <p class="text-sm text-secondary">$ {{ discountedPrice }}</p>
            <p class="text-neutralLighter text-xs line-through">
              $ {{ price }}
            </p>
          </div>
          <button
            class="w-20 text-sm bg-accent text-white rounded py-1 hover:bg-primary"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductCardProps } from "~/components/common/Cards/types/card.types";

const {
  productName,
  price,
  discountedPrice,
  productBrand,
  score,
  productImages,
} = defineProps<ProductCardProps>();
</script>
