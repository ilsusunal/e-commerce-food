<template>
  <div class="my-20">
    <Title description="CUSTOMER FAVORITES" title="Popular Categories" />
    <div class="flex flex-wrap items-center justify-center gap-4 md:gap-12">
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

const props = defineProps<{
  categories: CategoryItem[];
}>();
</script>
