<template>
  <div
    :class="`flex flex-col text-${textLocation} my-6 gap-8 font-sans text-wrap`"
  >
    <h4 class="text-accent text-xl">{{ props.description }}</h4>
    <h1 :class="`${titleSize} font-semibold`">{{ props.title }}</h1>
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
    default: "text-5xl",
  },
  textLocation: {
    type: String,
    required: false,
    default: "center",
  },
});
</script>
