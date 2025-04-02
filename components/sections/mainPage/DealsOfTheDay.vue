<template>
  <div class="my-10 w-fit mx-auto">
    <div class="justify-center md:flex md:justify-between gap-4 mb-6">
      <Title title="Deals Of The Day" title-size="text-3xl" />
      <!-- <Tabs v-model="selectedTab" :tabs="tabs" /> -->
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-full">
      <ProductCard
        v-for="(product, index) in dealsOfTheDay"
        :key="index"
        :product-name="product.productName"
        :price="product.price"
        :discounted-price="product.discountedPrice"
        :discount-amunt="product.discountAmunt"
        :product-brand="product.productBrand"
        :score="product.score"
        :label="product.label"
        :product-images="product.productImages"
        variant="image-focused"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/mainPage";
import ProductCard from "~/components/common/Cards/ProductCard/ProductCard.vue";
import Title from "~/components/common/Title/Title.vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  dealsOfTheDay: Product[];
}>();
</script>
