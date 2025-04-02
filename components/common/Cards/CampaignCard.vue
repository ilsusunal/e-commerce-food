<template>
  <div
    class="relative p-8 font-sans shadow-xl rounded-xl overflow-hidden group"
  >
    <NuxtImg
      :src="image"
      :alt="campaignName"
      class="absolute inset-0 w-auto h-full object-cover z-0"
    />

    <div
      class="relative z-10 flex flex-col justify-start h-full text-white text-center p-6"
    >
      <h4 class="text-3xl text-wrap font-semibold mb-4 text-start">
        {{ campaignName }}
      </h4>

      <NuxtLink
        :to="link"
        class="bg-accent text-white text-sm mt-20 w-32 px-3 py-2 rounded hover:bg-primary transition"
      >
        Shop Now
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Another way to use props, not from the official docs
const { campaignName, link, image } = defineProps<{
  image: string;
  campaignName: string;
  link: string;
}>();
</script>
