<template>
  <div
    class="flex flex-col items-center my-2 md:my-10 gap-4 font-sans shadow-xl rounded-xl p-8 w-58 hover:scale-110 transition-transform duration-300 ease-in-out"
  >
    <NuxtImg :src="image" :alt="title" class="w-28 h-auto object-cover" />
    <div class="flex flex-col gap-1 text-center">
      <h1 class="text-2xl font-semibold">{{ title }}</h1>
      <h4 class="text-lg text-neutralLight">{{ description }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
// Another way to use props, not from the official docs
const { description, title, image } = defineProps<{
  description: string;
  title: string;
  image: string;
}>();
</script>
