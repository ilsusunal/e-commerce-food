<template>
  <div>
    <div class="justify-center md:flex md:justify-between gap-4 mb-6">
      <Title :title="TITLE" title-size="text-3xl" />
      <Tabs v-model="selectedTab" :tabs="tabs" />
    </div>
    <div class="flex flex-col lg:flex-row gap-4 h-[480px]">
      <CampaignCard 
        :image="campaignCard.image" 
        :campaign-name="campaignCard.campaignName" 
        :link="campaignCard.link"
        class="w-[260px] h-[480px] shrink-0" 
      />
      <SliderWrapper :items="currentProducts" class="flex-1 h-full overflow-hidden">
        <template #default="{ item }">
          <ProductCard 
            :product-name="item.productName" 
            :price="item.price" 
            :discounted-price="item.discountedPrice"
            :discount-amunt="item.discountAmunt" 
            :product-brand="item.productBrand" 
            :score="item.score"
            :label="item.label" 
            :product-images="item.productImages" 
            variant="detailed" 
            class="h-[480px]" 
          />
        </template>
      </SliderWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import type { DailyBestSells, CampaignCardItem } from "~/types/mainPage";
import Title from "~/components/common/Title/Title.vue";
import ProductCard from "~/components/common/Cards/ProductCard/ProductCard.vue";
import Tabs from "~/components/common/Tabs/Tabs.vue";
import CampaignCard from "~/components/common/Cards/CampaignCard.vue";
import SliderWrapper from "~/components/common/Slider/SliderWrapper.vue";

const { dailyBestSells, campaignCard } = defineProps<{
  dailyBestSells: DailyBestSells;
  campaignCard: CampaignCardItem;
}>();

const TITLE = "Daily Best Sells";

const tabs = computed(() => Object.keys(dailyBestSells));

const selectedTab = ref("");

onMounted(() => {
  selectedTab.value = tabs.value[0] || "";
});

const currentProducts = computed(() => {
  return dailyBestSells[selectedTab.value] || [];
});

</script>
