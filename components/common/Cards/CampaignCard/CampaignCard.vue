<template>
    <component :is="currentVariant" v-bind="props" />
  </template>
  
  <script setup lang="ts">
  import DefaultCampaignCard from './variants/DefaultCampaignCard.vue';
  import type { CampaignCardProps } from '~/components/common/Cards/types/card.types';
  
  const props = defineProps<CampaignCardProps>();
  
  const currentVariant = computed(() => {
    switch (props.variant) {
      default:
        return DefaultCampaignCard;
    }
  });
  </script>
  