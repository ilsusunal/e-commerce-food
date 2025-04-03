<template>
  <SectionWrapper>
    <div class="flex justify-between items-center">
      <div class="max-w-[500px] items-start">
        <Title
          :description="DESCRIPTION"
          :title="TITLE"
          text-location="start"
        />
      </div>
      <div class="flex gap-8">
        <ButtonWithIcon
          v-for="(btn, index) in buttons"
          :key="index"
          :icon="btn.icon"
          button-class="bg-neutralLighter/50 text-neutral p-4 rounded-full w-16 h-16"
          selected-button-class="bg-accent text-white p-4 rounded-full w-16 h-16"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      <CategoryCard
        v-for="recipe in featuredRecipes"
        :key="recipe.id"
        v-bind="{
          title: recipe.recipeName,
          description: recipe.recipeText,
          image: recipe.recipeImage,
          cardSize: 'large',
          label: true,
          variant: 'default',
        }"
      />
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import type { Recipe } from "~/types/mainPage";
import Title from "~/components/common/Title/Title.vue";
import ButtonWithIcon from "~/components/common/Buttons/ButtonWithIcon.vue";
import CategoryCard from "~/components/common/Cards/CategoryCard/CategoryCard.vue";
import SectionWrapper from "~/components/common/SectionWrapper/SectionWrapper.vue";

const { featuredRecipes } = defineProps<{
  featuredRecipes: Recipe[];
}>();

const TITLE = "Standout Dishes From Our Menu";
const DESCRIPTION = "SPECIAL DISHES";

const buttons = [
  { icon: "material-symbols:arrow-back-ios-rounded" },
  { icon: "material-symbols:arrow-forward-ios-rounded" },
];
</script>
