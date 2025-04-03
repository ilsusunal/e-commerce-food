<template>
  <div
    :class="`flex flex-col text-${textLocation} my-6 gap-2 md:gap-4 font-sans text-wrap`"
  >
    <h4 v-if="props.description" class="text-accent text-base md:text-xl">
      {{ props.description }}
    </h4>
    <h1 :class="`${titleSize} ${titleFont} font-semibold`">
      {{ props.title }}
    </h1>
  </div>
</template>

<script setup>
// Defining props, official doc way
const props = defineProps({
  description: {
    type: String,
    required: false,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  titleSize: {
    type: String,
    required: false,
    default: "text-2xl md:text-4xl",
  },
  titleFont: {
    type: String,
    required: false,
    default: "font-poppins",
  },
  textLocation: {
    type: String,
    required: false,
    default: "center",
  },
});
</script>
