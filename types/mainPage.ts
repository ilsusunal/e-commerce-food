export interface MainPageData {
  popularCategories: PopularCategories[];
  dailyBestSells: DailyBestSells;
  campaingCards: CampaignCardProps[];
  featuredRecipes: Recipe[];
  dealsOfTheDay: Product[];
  testimonial: {
    title: string;
    image: string;
    testimonials: InfoCard[];
  };
  services: InfoCard[];
}

export interface CampaignCardProps {
  image: string;
  campaignName: string;
  link: string;
}
export interface DailyBestSells {
  [key: string]: Product[];
}
export interface PopularCategories {
  categoryName: string;
  itemAmount: string;
  categoryImage: string;
}
export interface Product {
  productName: string;
  price: number;
  discountedPrice: number;
  discountAmunt: number;
  productBrand: string;
  score: number;
  label: string;
  productImages: string;
}
export interface Recipe {
  recipeName: string;
  recipeText: string;
  recipeImage: string;
}
export interface InfoCard {
  title: string;
  text: string;
  icon: string;
}
