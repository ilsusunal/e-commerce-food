import type { CampaignCardItem, InfoCard, ProductItem } from "~/types/mainPage";

export interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  label?: boolean;
  cardSize?: "small" | "large" | "default";
  variant?: "default" | "compact" | "bordered";
}
export interface CampaignCardProps extends CampaignCardItem {
  variant?: "default";
}
export interface InfoCardProps {
  title: string;
  description: string;
  image: string;
  variant?: "default" | "vertical" | "bordered";
  size?: "sm" | "md" | "lg";
}
export interface ProductCardProps extends ProductItem {
  variant?: "detailed" | "image-focused" | "basic";
}
