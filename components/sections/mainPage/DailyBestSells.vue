<template>
  <div>
    <div class="justify-center md:flex md:justify-between gap-4 mb-6">
      <Title title="Daily Best Sells" title-size="text-3xl" />
      <Tabs v-model="selectedTab" :tabs="tabs" />
    </div>
    <div class="flex gap-4">
      <CampaignCard
        :image="campaignCard.image"
        :campaign-name="campaignCard.campaignName"
        :link="campaignCard.link"
        class="w-[400px] h-[480px]"
      />
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-full"
      >
        <ProductCard
          v-for="(product, index) in currentProducts"
          :key="selectedTab + '-' + index"
          :product-name="product.productName"
          :price="product.price"
          :discounted-price="product.discountedPrice"
          :discount-amunt="product.discountAmunt"
          :product-brand="product.productBrand"
          :score="product.score"
          :label="product.label"
          :product-images="product.productImages"
          variant="detailed"
          class="h-[480px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Title from "~/components/common/Title/Title.vue";
import ProductCard from "~/components/common/Cards/ProductCard/ProductCard.vue";
import type { DailyBestSells, CampaignCardProps } from "~/types/mainPage";
import Tabs from "~/components/common/Tabs/Tabs.vue";
import CampaignCard from "~/components/common/Cards/CampaignCard.vue";

const props = defineProps<{
  dailyBestSells: DailyBestSells;
  campaignCard: CampaignCardProps;
}>();

const tabs = computed(() => Object.keys(props.dailyBestSells));

const selectedTab = ref("");

onMounted(() => {
  selectedTab.value = tabs.value[0] || "";
});

const currentProducts = computed(() => {
  return props.dailyBestSells[selectedTab.value] || [];
});

// watch(selectedTab, (newVal) => {
//   console.log("Tab changed to:", newVal);
//   console.log("Data changed to:", currentProducts);
// });
</script>
