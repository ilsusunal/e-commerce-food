<template>
  <header
    class="hidden bg-white shadow-md shadow-black/10 py-2 px-4 md:flex items-center justify-around relative z-10 font-sans"
  >
    <div
      class="flex items-center text-black hover:text-primary cursor-pointer border rounded border-gray-200 p-2"
    >
      <Icon name="charm:menu-hamburger" class="text-lg m-0" />
    </div>
    <nav class="space-x-8 text-sm font-semibold">
      <NuxtLink to="/" class="text-black hover:text-primary">Home</NuxtLink>
      <NuxtLink to="/" class="text-black hover:text-primary">Category</NuxtLink>
      <NuxtLink to="/" class="text-black hover:text-primary">Products</NuxtLink>
      <NuxtLink to="/" class="text-black hover:text-primary">Pages</NuxtLink>
      <NuxtLink to="/" class="text-black hover:text-primary">Blog</NuxtLink>
      <NuxtLink to="/" class="text-black hover:text-primary">Elements</NuxtLink>
    </nav>
    <div class="text-sm flex gap-2 items-center">
      <Icon name="material-symbols:call" />
      <div>+123 ( 456 ) ( 7890 )</div>
    </div>
  </header>
</template>
