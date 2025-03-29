export interface MainPageData {
  popularCategories: PopularCategories[];
  dailyBestSells: {
    featured: Product[];
    popular: Product[];
    new: Product[];
    campaingCard: {
      campaignName: string;
      link: string;
    };
  };
  featuredRecipes: Recipe[];
  dealsOfTheDay: Product[];
  testimonial: {
    title: string;
    image: string;
    testimonials: InfoCard[];
  };
  services: InfoCard[];
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
