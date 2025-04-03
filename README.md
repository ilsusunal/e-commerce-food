# 🍽️ Foodzy – Modern E-Commerce Food UI

Foodzy is a modern, performance-oriented, and scalable e-commerce food platform interface. Developed with Nuxt 3, TailwindCSS, and component-driven architecture, it offers a fast and clean user experience.

To checkout live demo : [Demo Link](https://e-commerce-food-steel.vercel.app/)

## 🚀 Technologies

- Nuxt 3 (Vue 3 + SSR)
- TailwindCSS (JIT mode + custom theme)
- Swiper.js (responsive slider)
- Composable-based data handling
- Vercel deployment compatible
- Component-first modular directories (Atomic Design approach)

## 📁 Folder Structure

```
components/
│
├── common/               # Reusable UI components (Button, Card, Title, etc.)
│   └── Cards/
│       ├── ProductCard/
│       ├── CategoryCard/
│       └── ...
│
├── layout/               # Header / Footer
├── sections/main/        # Page sections (Hero, Testimonials, Deals, etc.)
├── Buttons/              # CustomButton & variants
├── Slider/               # SliderWrapper (with Swiper integration)
```

## 📦 Installation

```bash
# Clone the project
git clone https://github.com/username/foodzy.git
cd foodzy

# Install dependencies
pnpm install  # or yarn / npm install

# Start local development
pnpm dev
```

## 🧲 Mock Data

All page data is retrieved from:

```javascript
import { mockMainPageData } from "~/mock/mainPage";
```

This structure allows you to develop easily without an API connection.

## 📱 Responsive & UX

- Mobile-first responsive design
- Consistent padding/margin between sections
- Cards, sliders, and forms have elegant transition effects
- Scroll overflow and layout issues are optimized

## 🧱 Component Design

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

## 🌐 Deployment (Vercel)

- Connect the project to Vercel
- Auto-build configuration for Nuxt is automatically recognized
- You can add vercel.json if needed (not required)

## 🧼 Development Notes

- SectionWrapper aligns all sections in the same layout
- Fonts: Poppins (default), Quicksand (for Titles)
- Global Tailwind color theme:
  - primary: #FDBC33
  - accent: #F53E32
  - secondary: #3BB77E
