import { CategoryId } from "./categories";
import { SellerId } from "./sellers";
import { TagId } from "./tags";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  sellerId: SellerId;
  categoryId: CategoryId;
  tags: TagId[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "nostr-white-tshirt",
    title: "Nostr White T-shirt",
    description: "White tshirt with a nostr print",
    price: 777,
    images: ["/assets/store/nostr-white-tshirt.png"],
    sellerId: SellerId.UnsignedLabs,
    categoryId: CategoryId.MERCH,
    tags: [TagId.NOSTR],
    inStock: false,
  },
];
