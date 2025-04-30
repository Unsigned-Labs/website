export enum CategoryId {
  MERCH = "merch",
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export const categories: Category[] = [
  {
    id: CategoryId.MERCH,
    name: "Merchandise",
    description: "Merchandise and collectibles",
  },
];