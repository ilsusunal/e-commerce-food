<template>
  <button type="button" :class="buttonClasses" @click="toggle">
    <Icon
      :name="currentIcon"
      :class="[
        'transition-colors duration-150',
        iconClass,
        isSelected ? selectedIconClass : '',
      ]"
    />
  </button>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  icon: { type: String, required: true },
  selectedIcon: { type: String, default: "" },
  buttonClass: {
    type: String,
    default: "bg-neutralLighter/50 text-neutral p-4 rounded-full w-8 h-8",
  },
  selectedButtonClass: { type: String, default: "bg-accent text-white" },
  iconClass: { type: String, default: "text-neutral-700" },
  selectedIconClass: { type: String, default: "text-white" },
});

const isSelected = ref(false);

const toggle = () => (isSelected.value = !isSelected.value);

const currentIcon = computed(() =>
  isSelected.value && props.selectedIcon ? props.selectedIcon : props.icon
);

const buttonClasses = computed(
  () =>
    `${
      isSelected.value ? props.selectedButtonClass : props.buttonClass
    } transition-colors duration-300`
);
</script>
