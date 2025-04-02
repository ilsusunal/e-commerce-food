<template>
    <div class="flex w-full items-center gap-8 relative p-8 font-sans shadow-xl rounded-xl">
        <NuxtImg 
        :src="props.image" 
        :alt="props.title" 
        class="w-40 h-40" 
        />
        <div>
            <h1 class="font-semibold">{{ props.title }}</h1>
            <p>{{ props.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">

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
});

</script>