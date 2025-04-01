<template>
  <div class="my-10">
    <div class="justify-center md:flex md:justify-between gap-4 mb-6">
      <Title title="Daily Best Sells" titleSize="text-3xl" />
      <Tabs v-model="selectedTab" :tabs="tabs" />
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <CampaignCard
        :image="campaignCard.image"
        :campaignName="campaignCard.campaignName"
        :link="campaignCard.link"
      />
      <ProductCard
        v-for="(product, index) in currentProducts"
        :key="selectedTab + '-' + index"
        :productName="product.productName"
        :price="product.price"
        :discountedPrice="product.discountedPrice"
        :discountAmunt="product.discountAmunt"
        :productBrand="product.productBrand"
        :score="product.score"
        :label="product.label"
        :productImages="product.productImages"
        variant="detailed"
      />
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
