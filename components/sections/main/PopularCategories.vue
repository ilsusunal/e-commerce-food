<template>
  <div class="w-fit mx-auto">
    <Title :description="DESCRIPTION" :title="TITLE" />
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
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
  </div>
</template>

<script setup lang="ts">
import type { CategoryItem } from "~/types/mainPage";
import Title from "~/components/common/Title/Title.vue";
import CategoryCard from "~/components/common/Cards/CategoryCard/CategoryCard.vue";

const { categories } = defineProps<{
  categories: CategoryItem[];
}>();

const TITLE = "Popular Categories";
const DESCRIPTION = "CUSTOMER FAVORITES";
</script>
