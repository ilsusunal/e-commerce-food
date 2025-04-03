<template>
  <button type="button" :class="buttonClasses">
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
import { ref } from "vue";

const {
  icon,
  selectedIcon,
  buttonClass,
  selectedButtonClass,
  iconClass,
  selectedIconClass,
} = defineProps({
  icon: {
    type: String,
    required: true,
  },
  selectedIcon: {
    type: String,
    required: false,
    default: "",
  },
  buttonClass: {
    type: String,
    required: false,
    default:
      "bg-neutralLighter/50 text-neutral absolute top-0 right-0 text-lg px-4 py-2 rounded-none rounded-bl-xl rounded-tr-xl",
  },
  selectedButtonClass: {
    type: String,
    required: false,
    default: "bg-accent",
  },
  iconClass: {
    type: String,
    default: "text-neutral-700",
  },
  selectedIconClass: {
    type: String,
    default: "text-white",
  },
});

const isSelected = ref(false);

const currentIcon = computed(() =>
  isSelected.value && selectedIcon ? selectedIcon : icon
);

const buttonClasses = computed(
  () =>
    `${
      isSelected.value ? selectedButtonClass : buttonClass
    } transition-colors duration-300`
);
</script>
