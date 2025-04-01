<template>
  <div class="my-10">
    <div class="justify-center md:flex md:justify-between gap-4 mb-6">Bla</div>
    <div class="flex flex-wrap items-center justify-center gap-4"></div>
  </div>
</template>

<script setup lang="ts">
import type { InfoCard } from "~/types/mainPage";

const props = defineProps<{
  services: InfoCard[];
}>();
</script>
