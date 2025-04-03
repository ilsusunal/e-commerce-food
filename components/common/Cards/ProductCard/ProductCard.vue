<template>
  <component :is="currentVariant" v-bind="productProps" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ProductCardProps } from "~/components/common/Cards/types/card.types";
import DetailedProductCard from "./variants/DetailedProductCard.vue";
import ImageFocusedProductCard from "./variants/ImageFocusedProductCard.vue";

const props = defineProps<ProductCardProps>();

const currentVariant = computed(() => {
  switch (props.variant) {
    case "image-focused":
      return ImageFocusedProductCard;
    case "detailed":
    default:
      return DetailedProductCard;
  }
});

const { variant, ...productProps } = props;
</script>
