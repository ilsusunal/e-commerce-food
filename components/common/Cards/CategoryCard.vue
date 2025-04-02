<template>
  <div
    :class="[
      `relative flex flex-col items-center my-2 md:my-10 gap-4 font-sans shadow-xl rounded-xl p-8 hover:scale-110 transition-transform duration-300 ease-in-out`,
      cardSizeClass,
    ]"
  >
    <NuxtImg
      :src="props.image"
      :alt="props.title"
      :class="[`w-20 h-auto object-cover`, imageSizeClass]"
    />
    <div class="flex flex-col gap-1 text-center">
      <h1 class="text-xl font-semibold">{{ title }}</h1>
      <h4 class="text-base text-neutralLight">{{ description }}</h4>
    </div>
    <ButtonWithIcon
      v-if="label"
      icon="material-symbols:favorite-outline"
      selected-icon="material-symbols:favorite"
      button-class="absolute top-0 right-0 bg-accent text-white text-lg px-4 py-2 rounded-none rounded-bl-xl rounded-tr-xl"
    />
  </div>
</template>

<script setup lang="ts">
import ButtonWithIcon from "~/components/common/Buttons/ButtonWithIcon.vue";

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
  label: {
    type: Boolean,
    required: false,
    default: false,
  },
  cardSize: {
    type: String,
    required: false,
    default: "",
  },
});

const cardSizeClass = computed(() => {
  switch (props.cardSize) {
    case "small":
      return "w-[150px]";
    case "large":
      return "w-[360px] h-[360px]";
    default:
      return "w-max-[200px]";
  }
});

const imageSizeClass = computed(() => {
  switch (props.cardSize) {
    case "small":
      return "w-10";
    case "large":
      return "w-40";
    default:
      return "w-20";
  }
});
</script>
