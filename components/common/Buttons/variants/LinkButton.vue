<template>
  <NuxtLink :to="to" :class="buttonClass">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
  buttonClass?: string;
}>();
</script>
