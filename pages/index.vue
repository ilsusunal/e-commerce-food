<template>
  <Banner />
  <div class="mx-auto max-w-7xl">
    <PopularCategories :categories="popularCategories" />
    <DailyBestSells
      :dailyBestSells="dailyBestSells"
      :campaignCard="campaignCard"
    />
  </div>
</template>

<script setup lang="ts">
import Banner from "../components/layout/Banner.vue";
import PopularCategories from "../components/sections/mainPage/PopularCategories.vue";
import DailyBestSells from "../components/sections/mainPage/DailyBestSells.vue";

import { mockMainPageData } from "~/mock/mainPage";
const popularCategories = mockMainPageData.popularCategories;
const dailyBestSells = mockMainPageData.dailyBestSells;
const campaignCard = mockMainPageData.campaingCards[0];
</script>
