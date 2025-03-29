export interface MainPageData {
  popularCategories: PopularCategories[];
  dailyBestSellsFeatured: Product[];
  dailyBestSellsPopular: Product[];
  dailyBestSellsNew: Product[];
  dailyBestSellsCampaing: {
    campaignName: string;
    link: string;
  };
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
