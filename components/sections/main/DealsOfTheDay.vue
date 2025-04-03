<template>
  <SectionWrapper>
    <div
      class="flex flex-col md:flex-row md:justify-between items-center gap-4 mb-6"
    >
      <Title :title="TITLE" title-size="text-3xl" titleFont="font-quicksand" />
      <CustomButton
        variant="link"
        to="/products"
        buttonClass="text-neutralLighter text-lg hover:text-secondary"
      >
        All Deals >
      </CustomButton>
    </div>
    <div
      class="items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full justify-items-center"
    >
      <ProductCard
        v-for="product in dealsOfTheDay"
        :key="product.id"
        v-bind="{ ...product, variant: 'image-focused' }"
      />
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import type { ProductItem } from "~/types/mainPage";
import ProductCard from "~/components/common/Cards/ProductCard/ProductCard.vue";
import Title from "~/components/common/Title/Title.vue";
import SectionWrapper from "~/components/common/SectionWrapper/SectionWrapper.vue";
import CustomButton from "~/components/common/Buttons/CustomButton.vue";

const { dealsOfTheDay } = defineProps<{
  dealsOfTheDay: ProductItem[];
}>();

const TITLE = "Deals Of The Day";
</script>
