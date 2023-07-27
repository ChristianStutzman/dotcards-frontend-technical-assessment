export interface productDataMap {
  brandName: string;
  productName: string;
  price: number;
  productDescription: string;
  productSpecs: string[];
  brandProductId: number | null;
}

export const productData: productDataMap[] = [
  {
    brandName: "Off-White",
    productName: 'Out Of Office "Ooo" sneakers',
    price: 775,
    productDescription:
      "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    productSpecs: [
      "Regular fit",
      "Lace closure",
      "Rubber outsole with vulcanized look",
      "imported",
    ],
    brandProductId: null,
  },
  {
    brandName: "Nike",
    productName: "Nike Gamma Force",
    price: 200,
    productDescription:
      "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    productSpecs: [
      "Regular fit",
      "Lace closure",
      "Rubber outsole with vulcanized look",
      "imported",
    ],
    brandProductId: 1,
  },
  {
    brandName: "Nike",
    productName: "Cosmic Unity 3",
    price: 160,
    productDescription:
      "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    productSpecs: [
      "Regular fit",
      "Lace closure",
      "Rubber outsole with vulcanized look",
      "imported",
    ],
    brandProductId: 2,
  },
  {
    brandName: "adidas",
    productName: "DAILY 3.0 SHOES",
    price: 98.99,
    productDescription:
      "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    productSpecs: [
      "Regular fit",
      "Lace closure",
      "Rubber outsole with vulcanized look",
      "imported",
    ],
    brandProductId: null,
  },
];
