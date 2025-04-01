<template>
  <component :is="currentVariant" v-bind="productProps" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Product } from "~/types/mainPage";
import DetailedProductCard from "./variants/DetailedProductCard.vue";
import ImageFocusedProductCard from "./variants/ImageFocusedProductCard.vue";

interface Props extends Product {
  variant: "detailed" | "image-focused" | "basic";
}

const props = defineProps<Props>();

const currentVariant = computed(() => {
  switch (props.variant) {
    case "detailed":
      return DetailedProductCard;
    case "image-focused":
      return ImageFocusedProductCard;
    default:
      return DetailedProductCard;
  }
});

const { variant, ...productProps } = props;
</script>
