<template>
    <component :is="currentVariant" v-bind="props" />
</template>

<script setup lang="ts">
import type { CategoryCardProps } from '~/components/common/Cards/types/card.types';
import DefaultCategoryCard from './variants/DefaultCategoryCard.vue';

const props = defineProps<CategoryCardProps>();

const currentVariant = computed(() => {
    switch (props.variant) {
        default:
            return DefaultCategoryCard;
    }
});
</script>