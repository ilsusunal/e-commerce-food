<template>
  <div>
    <div class="relative">
      <NuxtImg
        src="/images/mainPage/mail_subscription.png"
        alt="Subscribe"
        class="w-full rounded-xl"
      />
      <div class="absolute inset-0 flex items-center justify-start pl-8">
        <SubscriptionForm
          title="Stay home & get your daily needs from our shop"
          description="Start You'r Daily Shopping with Nest Mart"
        />
      </div>
    </div>
    <div
      class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1"
    >
      <CardWithIcon
        v-for="(item, index) in services"
        :key="index"
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
import CardWithIcon from "~/components/common/Cards/CardWithIcon.vue";
import SubscriptionForm from "~/components/common/SubscriptionForm/SubscriptionForm.vue";

const props = defineProps<{
  services: InfoCard[];
}>();
</script>
