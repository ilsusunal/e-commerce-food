<template>
  <footer class="bg-neutralLighter/20 p-20 mt-32">
    <div class="flex justify-between gap-8 mb-8 max-w-6xl mx-auto">
      <!-- About Section -->
      <div class="md:max-w-[400px]">
        <NuxtImg :src="footer.about.logo" alt="Foodzy Logo" class="w-48 mb-4" />
        <p class="text-neutralLight">{{ footer.about.description }}</p>
        <ul class="mt-4 space-y-2">
          <li v-for="(item, i) in footer.about.communication" :key="i" class="flex gap-2 items-center">
            <Icon :name="item.icon" class="w-5 h-5 text-accent" />
            <span class="text-neutralLight text-sm">{{ item.text }}</span>
          </li>
        </ul>
      </div>

      <!-- Footer Links -->
      <div v-for="(items, title) in footer.columns" :key="title">
        <h2 class="font-semibold mb-2 text-xl">{{ title }}</h2>
        <ul class="space-y-2 text-neutralLight">
          <li v-for="(link, i) in items" :key="i">
            <NuxtLink :to="link.link" class="hover:text-accent">{{
              link.text
            }}</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Social Media -->
      <div>
        <h2 class="font-semibold mb-2 text-xl">Subscribe Our Newsletter</h2>
        <input 
          type="email" 
          placeholder="Your email address" 
          required
          class="mb-4 p-2 bg-white border border-neutralLighter rounded w-full text-neutral"
        >
        <div class="flex gap-3 mb-4">
          <NuxtLink 
            v-for="(social, i) in footer.socials.socialMedia" 
            :key="i" :to="social.link"
            class="hover:text-accent"
          >
            <div class="flex items-center bg-white border border-neutralLighter rounded p-2">
              <Icon :name="social.icon" class="w-5 h-5 text-neutralLight" />
            </div>
          </NuxtLink>
        </div>
        <div class="flex gap-2">
          <NuxtImg 
            v-for="(img, i) in footer.socials.images" 
            :key="i" 
            :src="img" 
            alt="Foodzy"
            class="w-20 h-20 rounded" 
          />
        </div>
      </div>
    </div>

    <div class="text-center text-sm text-neutralDark mt-auto">
      © 2025 Foodzy, All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
const { footer } = defineProps<{
  footer: {
    about: {
      logo: string;
      description: string;
      communication: {
        icon: string;
        text: string;
      }[];
    };
    columns: {
      Company: { text: string; link: string }[];
      Category: { text: string; link: string }[];
    };
    socials: {
      socialMedia: { link: string; icon: string }[];
      images: string[];
    };
  };
}>();
</script>
