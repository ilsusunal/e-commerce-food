<template>
  <div class="flex gap-4 text-lg">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="$emit('update:modelValue', tab)"
      :class="[
        'transition-colors duration-200',
        modelValue === tab ? 'text-secondary' : '',
      ]"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tabs: string[];
  modelValue: string;
}>();

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>
