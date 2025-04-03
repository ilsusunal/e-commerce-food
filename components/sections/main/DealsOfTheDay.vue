<template>
  <div class="w-fit mx-auto">
    <div class="justify-center md:flex md:justify-between gap-4 mb-6">
      <Title :title="TITLE" title-size="text-3xl" />
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      <ProductCard
        v-for="product in dealsOfTheDay"
        :key="product.id"
        v-bind="{ ...product, variant: 'image-focused' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductItem } from "~/types/mainPage";
import ProductCard from "~/components/common/Cards/ProductCard/ProductCard.vue";
import Title from "~/components/common/Title/Title.vue";

const { dealsOfTheDay } = defineProps<{
  dealsOfTheDay: ProductItem[];
}>();

const TITLE = "Deals Of The Day";
</script>
