# Foodzy – Modern E-Commerce Food UI

Foodzy is a modern, performance-oriented, and scalable e-commerce food platform interface. Developed with Nuxt 3, TailwindCSS, and component-driven architecture.

To checkout live demo : [Demo Link](https://e-commerce-food-steel.vercel.app/)

## Technologies

- Nuxt 3 (Vue 3 + SSR)
- TailwindCSS (JIT mode + custom theme)
- Swiper.js (responsive slider)
- Composable-based data handling
- Vercel deployment compatible

## Folder Structure

```

├── components/
│   ├── common/           # Reusable UI components (Button, Card, Title, etc.)
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections
│
├── constants/            # Commonly used variables (Logo etc.)
├── layouts/              # Page layouts (Only default at the moment)
├── mock/                 # Mock data (All page data is retrieved from here, no api connection)
├── pages/                # Pages (Only index at the moment)
├── types/                # Data types
│
```

## Component Design

Each card component is managed with props like variant and size. For example:

```vue
<ProductCard :product-name="..." :price="..." variant="detailed" />
```

The slider is used flexibly like this:

```vue
<SliderWrapper :items="items">
  <template #default="{ item }">
    <ProductCard :product="item" />
  </template>
</SliderWrapper>
```

## Responsive

- SectionWrapper aligns all sections in the same layout
- Global Tailwind color theme used
- Mobile-first responsive design
