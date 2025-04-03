<template>
  <SectionWrapper>
    <Title :description="DESCRIPTION" :title="TITLE" />
    <div
      class="md:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-8 w-full justify-items-center"
    >
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        v-bind="{
          title: category.categoryName,
          description: category.itemAmount,
          image: category.categoryImage,
          variant: 'default',
        }"
      />
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import type { CategoryItem } from "~/types/mainPage";
import Title from "~/components/common/Title/Title.vue";
import CategoryCard from "~/components/common/Cards/CategoryCard/CategoryCard.vue";
import SectionWrapper from "~/components/common/SectionWrapper/SectionWrapper.vue";

const { categories } = defineProps<{
  categories: CategoryItem[];
}>();

const TITLE = "Popular Categories";
const DESCRIPTION = "CUSTOMER FAVORITES";
</script>
