<template>
  <div
    class="relative p-8 font-sans shadow-xl rounded-xl overflow-hidden group"
  >
    <NuxtImg
      :src="image"
      :alt="campaignName"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />

    <div
      class="relative z-10 flex flex-col justify-start h-full text-white text-center p-4"
    >
      <h4 class="text-3xl font-semibold mb-16 text-start font-quicksand">
        {{ campaignName }}
      </h4>

      <NuxtLink
        :to="link"
        class="bg-accent text-white text-sm w-32 px-3 py-2 rounded hover:bg-primary transition"
      >
        Shop Now
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CampaignCardProps } from "~/components/common/Cards/types/card.types";

const { image, campaignName, link } = defineProps<CampaignCardProps>();
</script>
