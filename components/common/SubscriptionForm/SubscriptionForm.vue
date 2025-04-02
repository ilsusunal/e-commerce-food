<template>
  <div>
    <div class="text-white my-8 font-sans">
      <h1 class="text-3xl text-wrap max-w-[400px] font-semibold my-4">
        {{ props.title }}
      </h1>
      <h4 class="text-base">{{ props.description }}</h4>
    </div>
    <form @submit.prevent="handleSubmit" class="w-full max-w-xl relative">
      <input
        type="email"
        v-model="email"
        placeholder="Your email address"
        required
        class="p-4 rounded-full w-full text-neutral"
      />

      <button
        type="submit"
        class="absolute top-1/2 -translate-y-1/2 right-0 bg-accent hover:bg-primary text-white p-4 rounded-full transition"
      >
        Subscribe
      </button>
    </form>

    <p v-if="submitted" class="text-green-400 mt-4">
      Thank you! Check your emil box.
    </p>
  </div>
</template>

<script setup>
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
});

const email = ref("");
const submitted = ref(false);

const handleSubmit = () => {
  if (email.value) {
    submitted.value = true;
    email.value = "";
  }
};
</script>
