<template>
  <div
    :class="[
      'relative flex flex-col items-center gap-2 md:gap-4 font-sans shadow-xl rounded-xl p-4 md:p-8 hover:scale-110 md:transition-transform duration-300 ease-in-out',
      cardSizeClass,
    ]"
  >
    <NuxtImg
      :src="image"
      :alt="title"
      :class="['object-cover', imageSizeClass]"
    />
    <div class="flex flex-col gap-1 text-center">
      <h1 class="text-xl font-semibold">{{ title }}</h1>
      <h4 class="text-base text-neutralLight">{{ description }}</h4>
    </div>
    <CustomButton
      v-if="label"
      variant="icon-toggle"
      icon="material-symbols:favorite-outline"
      selected-icon="material-symbols:favorite"
      iconClass="w-4 h-4 md:w-6 md:h-6"
      buttonClass="absolute top-0 right-0 bg-accent text-white text-lg px-6 py-2 rounded-none rounded-bl-3xl rounded-tr-xl"
      selectedButtonClass="absolute top-0 right-0 bg-accent text-white text-lg px-6 py-2 rounded-none rounded-bl-3xl rounded-tr-xl"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CustomButton from "~/components/common/Buttons/CustomButton.vue";
import type { CategoryCardProps } from "~/components/common/Cards/types/card.types";

const { title, description, image, label, cardSize } =
  defineProps<CategoryCardProps>();

const cardSizeClass = computed(() => {
  switch (cardSize) {
    case "small":
      return "w-[120px] w-[150px]";
    case "large":
      return "w-[280px] h-[320px] md:w-[320px] md:h-[360px]";
    default:
      return "w-[150px] md:w-[200px]";
  }
});

const imageSizeClass = computed(() => {
  switch (cardSize) {
    case "small":
      return "w-4 md:w-10";
    case "large":
      return "w-32 md:w-40";
    default:
      return "w-10 md:w-20";
  }
});
</script>
