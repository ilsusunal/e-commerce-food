<template>
  <div
    class="hidden md:flex items-center h-10 w-full max-w-lg border border-secondary rounded-md overflow-hidden"
  >
    <input
      type="text"
      placeholder="Search For Items..."
      class="flex-1 h-full px-4 bg-transparent text-sm outline-none"
    />
    <select
      class="h-full px-4 mx-2 text-sm border-l border-secondary outline-none cursor-pointer"
    >
      <option value="">All Categories</option>
      <option>Pizza</option>
      <option>Burger</option>
      <option>Dessert</option>
    </select>
    <button class="h-full px-4 bg-neutral text-white hover:bg-primary">
      <Icon name="material-symbols:search" class="w-5 h-5" />
    </button>
  </div>
</template>
