<template>
  <div class="w-full mx-auto">
    <div class="flex justify-between items-center">
      <div class="max-w-[500px] items-start">
        <Title
          description="SPECIAL DISHES"
          title="Standout Dishes From Our Menu"
          text-location="start"
        />
      </div>
      <div class="flex gap-8">
        <ButtonWithIcon
          icon="material-symbols:arrow-back-ios-rounded"
          button-class="bg-neutralLighter/50 text-neutral p-4 rounded-full w-16 h-16"
          selected-button-class="bg-accent text-white p-4 rounded-full w-16 h-16"
        />
        <ButtonWithIcon
          icon="material-symbols:arrow-forward-ios-rounded"
          button-class="bg-neutralLighter/50 text-neutral p-4 rounded-full w-16 h-16"
          selected-button-class="bg-accent text-white p-4 rounded-full w-16 h-16"
        />
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-full">
      <CategoryCard
        v-for="(recipe, index) in featuredRecipes"
        :key="index"
        :title="recipe.recipeName"
        :description="recipe.recipeText"
        :image="recipe.recipeImage"
        card-size="large"
        label
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from "~/types/mainPage";
import Title from "~/components/common/Title/Title.vue";
import CategoryCard from "~/components/common/Cards/CategoryCard.vue";
import ButtonWithIcon from "~/components/common/Buttons/ButtonWithIcon.vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  featuredRecipes: Recipe[];
}>();
</script>
