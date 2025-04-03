<template>
  <Suspense>
    <template #default>
      <main class="flex flex-col gap-6 md:gap-20">
        <Hero />
        <PopularCategories :categories="popularCategories" />
        <DailyBestSells
          :daily-best-sells="dailyBestSells"
          :campaign-card="campaignCard"
        />
        <FeaturedRecipes :featured-recipes="featuredRecipes" />
        <DealsOfTheDay :deals-of-the-day="dealsOfTheDay" />
        <Testimonial :testimonial="testimonial" />
        <MailSubscriptionAndServices :services="services" />
      </main>
    </template>
    <template #fallback>
      <div class="min-h-screen flex items-center justify-center bg-white">
        <div class="loader"></div>
      </div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { mockMainPageData } from "~/mock/mainPage";
import Hero from "../components/sections/main/Hero.vue";
import PopularCategories from "../components/sections/main/PopularCategories.vue";
import DailyBestSells from "../components/sections/main/DailyBestSells.vue";
import FeaturedRecipes from "~/components/sections/main/FeaturedRecipes.vue";
import DealsOfTheDay from "~/components/sections/main/DealsOfTheDay.vue";
import Testimonial from "~/components/sections/main/Testimonial.vue";
import MailSubscriptionAndServices from "~/components/sections/main/MailSubscriptionAndServices.vue";

const popularCategories = mockMainPageData.popularCategories;
const dailyBestSells = mockMainPageData.dailyBestSells;
const campaignCard = mockMainPageData.campaingCards[0];
const featuredRecipes = mockMainPageData.featuredRecipes;
const dealsOfTheDay = mockMainPageData.dealsOfTheDay;
const testimonial = mockMainPageData.testimonial;
const services = mockMainPageData.services;
</script>

<style scoped>
.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #fdbc33;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
