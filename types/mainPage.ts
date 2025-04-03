export interface MainPageData {
  popularCategories: CategoryItem[];
  dailyBestSells: DailyBestSells;
  campaingCards: CampaignCardItem[];
  featuredRecipes: Recipe[];
  dealsOfTheDay: ProductItem[];
  testimonial: {
    title: string;
    image: string;
    testimonials: InfoCardItem[];
  };
  services: InfoCardItem[];
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
}

export interface CampaignCardItem {
  id: number;
  image: string;
  campaignName: string;
  link: string;
}
export interface DailyBestSells {
  [key: string]: ProductItem[];
}
export interface CategoryItem {
  id: number;
  categoryName: string;
  itemAmount: string;
  categoryImage: string;
}
export interface ProductItem {
  id: number;
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
  id: number;
  recipeName: string;
  recipeText: string;
  recipeImage: string;
}
export interface InfoCardItem {
  id: number;
  title: string;
  text: string;
  icon: string;
}
