<template>
  <component :is="currentVariant" v-bind="props">
    <slot />
  </component>
</template>

<script setup lang="ts">
import ButtonWithIcon from "./variants/ButtonWithIcon.vue";
import LinkButton from "./variants/LinkButton.vue";

const props = defineProps<{
  variant: "icon-toggle" | "link";
  [key: string]: any;
}>();

const currentVariant = computed(() => {
  switch (props.variant) {
    case "link":
      return LinkButton;
    case "icon-toggle":
    default:
      return ButtonWithIcon;
  }
});
</script>
