<template>
  <div class="my-20 w-full mx-auto">
    <div class="flex justify-between items-center">
      <div class="max-w-[500px] items-start">
        <Title
          description="SPECIAL DISHES"
          title="Standout Dishes From Our Menu"
          textLocation="start"
        />
      </div>
      <div class="flex gap-8">
        <ButtonWithIcon
          icon="material-symbols:arrow-back-ios-rounded"
          buttonClass="bg-neutralLighter/50 text-neutral p-4 rounded-full w-16 h-16"
          selectedButtonClass="bg-accent text-white p-4 rounded-full w-16 h-16"
        />
        <ButtonWithIcon
          icon="material-symbols:arrow-forward-ios-rounded"
          buttonClass="bg-neutralLighter/50 text-neutral p-4 rounded-full w-16 h-16"
          selectedButtonClass="bg-accent text-white p-4 rounded-full w-16 h-16"
        />
      </div>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4 md:gap-12">
      <CategoryCard
        v-for="(recipe, index) in featuredRecipes"
        :key="index"
        :title="recipe.recipeName"
        :description="recipe.recipeText"
        :image="recipe.recipeImage"
        cardSize="large"
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

const props = defineProps<{
  featuredRecipes: Recipe[];
}>();
</script>
