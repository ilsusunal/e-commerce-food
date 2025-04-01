<template>
  <Banner />
  <div class="mx-auto max-w-7xl">
    <PopularCategories :categories="popularCategories" />
    <DailyBestSells
      :dailyBestSells="dailyBestSells"
      :campaignCard="campaignCard"
    />
    <FeaturedRecipes :featuredRecipes="featuredRecipes" />
    <DealsOfTheDay :dealsOfTheDay="dealsOfTheDay" />
    <Testimonial :testimonial="testimonial" />
    <MailSubscriptionAndServices :services="services" />
  </div>
</template>

<script setup lang="ts">
import { mockMainPageData } from "~/mock/mainPage";
import Banner from "../components/layout/Banner.vue";
import PopularCategories from "../components/sections/mainPage/PopularCategories.vue";
import DailyBestSells from "../components/sections/mainPage/DailyBestSells.vue";
import FeaturedRecipes from "~/components/sections/mainPage/FeaturedRecipes.vue";
import DealsOfTheDay from "~/components/sections/mainPage/DealsOfTheDay.vue";
import Testimonial from "~/components/sections/mainPage/Testimonial.vue";
import MailSubscriptionAndServices from "~/components/sections/mainPage/MailSubscriptionAndServices.vue";

const popularCategories = mockMainPageData.popularCategories;
const dailyBestSells = mockMainPageData.dailyBestSells;
const campaignCard = mockMainPageData.campaingCards[0];
const featuredRecipes = mockMainPageData.featuredRecipes;
const dealsOfTheDay = mockMainPageData.dealsOfTheDay;
const testimonial = mockMainPageData.testimonial;
const services = mockMainPageData.services;
</script>
