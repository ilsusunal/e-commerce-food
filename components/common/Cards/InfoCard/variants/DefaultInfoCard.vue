<template>
  <div
    :class="[
      'flex items-center gap-6 p-4 font-sans shadow-md rounded-xl w-full',
      sizeClass.container,
    ]"
  >
    <NuxtImg
      :src="image"
      :alt="title"
      :class="['object-cover rounded', sizeClass.image]"
    />
    <div>
      <h1 :class="['font-semibold', sizeClass.title]">{{ title }}</h1>
      <p :class="['text-neutralDark', sizeClass.description]">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { InfoCardProps } from "~/components/common/Cards/types/card.types";

const props = defineProps<InfoCardProps>();

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return {
        container: "p-2",
        image: "w-12 h-12",
        title: "text-sm",
        description: "text-xs",
      };
    case "lg":
      return {
        container: "p-6",
        image: "w-32 h-32",
        title: "text-xl",
        description: "text-base",
      };
    default:
      return {
        container: "p-4",
        image: "w-24 h-24",
        title: "text-base",
        description: "text-sm",
      };
  }
});
</script>
