<template>
  <Banner />
  <PopularCategories :categories="popularCategories" />
</template>

<script setup lang="ts">
import Banner from "../components/layout/Banner.vue";
import PopularCategories from "../components/sections/mainPage/PopularCategories.vue";

import { mockMainPageData } from "~/mock/mainPage";
const popularCategories = mockMainPageData.popularCategories;
</script>
