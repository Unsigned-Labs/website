export enum SellerId {
  UnsignedLabs = "unsigned-labs",
}

export interface Seller {
  id: SellerId;
  name: string;
  description: string;
  email: string;
  otherContactOptions?: [
    {
      name: string;
      value: string;
    }
  ];
  image?: string;
}

export const sellers: Seller[] = [
  {
    id: SellerId.UnsignedLabs,
    name: "Unsigned Labs",
    description: "Merch and Hardware from Unsigned",
    email: "basantagoswami@unsigned.in",
    otherContactOptions: [
      {
        name: "X (Twitter)",
        value: "@UnsignedLabs",
      },
    ],
    image: "/assets/logo-bg.png",
  },
];
