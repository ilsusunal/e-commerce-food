<template>
  <SectionWrapper>
    <div class="relative">
      <NuxtImg
        :src="MAIL_SUBSCRIPTION_IMAGE"
        alt="Subscribe"
        class="md:w-full rounded-xl"
      />
      <div
        class="absolute inset-0 flex items-center justify-start pl-4 sm:pl-8 lg:pl-16"
      >
        <SubscriptionForm :title="FORM_TITLE" :description="FORM_DESCRIPTION" />
      </div>
    </div>
    <div
      class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1"
    >
      <InfoCard
        v-for="item in services"
        :key="item.id"
        :title="item.title"
        :description="item.text"
        :image="item.icon"
        size="sm"
        class="bg-neutralLighter/20 shadow-none"
      />
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import type { InfoCardItem } from "~/types/mainPage";
import { MAIL_SUBSCRIPTION_IMAGE } from "~/constants/constants";
import SubscriptionForm from "~/components/common/SubscriptionForm/SubscriptionForm.vue";
import InfoCard from "~/components/common/Cards/InfoCard/InfoCard.vue";
import SectionWrapper from "~/components/common/SectionWrapper/SectionWrapper.vue";

const { services } = defineProps<{
  services: InfoCardItem[];
}>();

const FORM_TITLE = "Stay home & get your daily needs from our shop";
const FORM_DESCRIPTION = "Start Your Daily Shopping with Nest Mart";
</script>
