<template>
    <component :is="currentVariant" v-bind="props" />
  </template>
  
  <script setup lang="ts">
  import type { InfoCardProps } from '~/components/common/Cards/types/card.types';
  import DefaultInfoCard from './variants/DefaultInfoCard.vue';
  
  const props = defineProps<InfoCardProps>();
  
  const currentVariant = computed(() => {
    switch (props.variant) {
      default:
        return DefaultInfoCard;
    }
  });
  </script>
  