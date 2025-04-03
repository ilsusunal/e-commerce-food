<template>
  <header class="bg-white shadow flex items-center justify-around font-sans">
    <NuxtImg
      :src="LOGO"
      width="200"
      height="100"
      alt="Foodzy Logo"
    />
    <SearchBar />
    <nav class="hidden md:flex items-center space-x-6 text-[15px]">
      <NuxtLink to="/" class="text-black hover:text-primary flex items-center">
        <Icon
          name="material-symbols:person-2-outline"
          class="mr-2"
        />Account</NuxtLink
      >
      <NuxtLink to="/" class="text-black hover:text-primary flex items-center"
        ><Icon
          name="material-symbols:favorite-outline-rounded"
          class="mr-2"
        />Whislist</NuxtLink
      >
      <NuxtLink to="/" class="text-black hover:text-primary flex items-center"
        ><Icon
          name="material-symbols-light:shopping-cart-outline"
          class="mr-2"
        />Cart</NuxtLink
      >
    </nav>
    <div class="flex items-center md:hidden">
      <Icon name="charm:menu-hamburger" class="" />
    </div>
  </header>
</template>

<script setup>
import { LOGO } from '~/constants/constants';
import SearchBar from '~/components/common/SearchBar/SearchBar.vue';
</script>
