<template>
    <div class="flex items-center gap-6 p-4 font-sans shadow-md rounded-xl w-full">
      <NuxtImg :src="image" :alt="title" class="w-24 h-24 object-cover rounded" />
      <div>
        <h1 class="font-semibold text-base">{{ title }}</h1>
        <p class="text-sm text-neutralDark">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { InfoCardProps } from '~/components/common/Cards/types/card.types';
  
  const {title, description, image} = defineProps<InfoCardProps>();
  </script>
  