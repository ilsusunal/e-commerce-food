<template>
  <div class="w-fit mx-auto">
    <Title description="CUSTOMER FAVORITES" title="Popular Categories" />
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-full"
    >
      <CategoryCard
        v-for="(category, index) in categories"
        :key="index"
        :title="category.categoryName"
        :description="category.itemAmount"
        :image="category.categoryImage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "~/components/common/Title/Title.vue";
import CategoryCard from "~/components/common/Cards/CategoryCard.vue";

interface CategoryItem {
  categoryName: string;
  itemAmount: string;
  categoryImage: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  categories: CategoryItem[];
}>();
</script>
