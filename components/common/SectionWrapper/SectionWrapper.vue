<template>
  <section :class="wrapperClass">
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const wrapperClass = "w-full py-2 sm:py-4 lg:py-8";
</script>
