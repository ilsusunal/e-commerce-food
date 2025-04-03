<template>
  <div>
    <div class="relative">
      <NuxtImg
        :src="MAIL_SUBSCRIPTION_IMAGE"
        alt="Subscribe"
        class="w-full rounded-xl"
      />
      <div class="absolute inset-0 flex items-center justify-start pl-4 sm:pl-8 lg:pl-16">
        <SubscriptionForm
          :title="FORM_TITLE"
          :description="FORM_DESCRIPTION"
        />
      </div>
    </div>
    <div
      class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1"
    >
      <CardWithIcon
        v-for="item in services"
        :key="item.id"
        :description="item.text"
        :image="item.icon"
        :title="item.title"
        class="bg-neutralLighter/20 shadow-none"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfoCard } from "~/types/mainPage";
import { MAIL_SUBSCRIPTION_IMAGE } from '~/constants/constants';
import CardWithIcon from "~/components/common/Cards/CardWithIcon.vue";
import SubscriptionForm from "~/components/common/SubscriptionForm/SubscriptionForm.vue";

const {services} = defineProps<{
  services: InfoCard[];
}>();

const FORM_TITLE = "Stay home & get your daily needs from our shop";
const FORM_DESCRIPTION = "Start Your Daily Shopping with Nest Mart";
</script>
