<template>
  <div
    class="flex w-full items-center gap-8 relative p-2 font-sans shadow-md rounded-xl mt-4"
  >
    <NuxtImg :src="props.image" :alt="props.title" class="w-24 h-24" />
    <div>
      <h1 class="font-semibold">{{ props.title }}</h1>
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>
