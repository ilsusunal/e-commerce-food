export interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  label?: boolean;
  cardSize?: "small" | "large" | "default";
  variant?: "default" | "compact" | "bordered";
}
export interface CampaignCardProps {
  image: string;
  campaignName: string;
  link: string;
  variant?: "default"; 
}
export interface InfoCardProps {
  title: string;
  description: string;
  image: string;
  variant?: 'default' | 'vertical' | 'bordered';
}
export interface ProductCardProps {
  id: string | number;
  productName: string;
  price: number;
  discountedPrice: number;
  productBrand: string;
  score: number;
  label?: string;
  productImages: string;
  variant?: 'detailed' | 'image-focused' | 'basic';
}
