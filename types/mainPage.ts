export interface MainPageData {
  popularCategories: CategoryItem[];
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

export interface CampaignCardProps {
  image: string;
  campaignName: string;
  link: string;
}
export interface DailyBestSells {
  [key: string]: Product[];
}
export interface CategoryItem {
  id: number;
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
