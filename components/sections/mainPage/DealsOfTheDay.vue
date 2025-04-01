<template>
  <div class="my-10">
    <div class="justify-center md:flex md:justify-between gap-4 mb-6">
      <Title title="Deals Of The Day" titleSize="text-3xl" />
      <!-- <Tabs v-model="selectedTab" :tabs="tabs" /> -->
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <ProductCard
        v-for="(product, index) in dealsOfTheDay"
        :key="index"
        :productName="product.productName"
        :price="product.price"
        :discountedPrice="product.discountedPrice"
        :discountAmunt="product.discountAmunt"
        :productBrand="product.productBrand"
        :score="product.score"
        :label="product.label"
        :productImages="product.productImages"
        variant="image-focused"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/mainPage";
import ProductCard from "~/components/common/Cards/ProductCard/ProductCard.vue";
import Title from "~/components/common/Title/Title.vue";

const props = defineProps<{
  dealsOfTheDay: Product[];
}>();
</script>
