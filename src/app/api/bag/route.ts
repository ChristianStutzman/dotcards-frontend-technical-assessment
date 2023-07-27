import { NextResponse } from "next/server";
import { productData, productDataMap } from "@/config/productData";

export interface CartItem {
  productId: number;
  quantity: number;
  brandName?: string;
  productName?: string;
  price?: number;
  brandProductId?: number | null;
}

let cart: CartItem[] = [];

export async function POST(request: Request) {
  const productData: CartItem = await request.json();
  cart.push(productData);

  return NextResponse.json({ message: "Product added to cart" });
}

export async function GET() {
  const mergedCart: { [key: number]: CartItem } = cart.reduce(
    (accumulator: any, item) => {
      const { productId, quantity } = item;

      if (accumulator[productId]) {
        accumulator[productId].quantity += quantity;
      } else {
        accumulator[productId] = { productId, quantity };
      }

      return accumulator;
    },
    {}
  );

  const response: CartItem[] = Object.values(mergedCart);

  response.forEach((product: CartItem) => {
    const productInfo = productData.find(
      (singleProduct) => singleProduct.productId === product.productId
    );

    product.brandName = productInfo?.brandName;
    product.productName = productInfo?.productName;
    product.price = productInfo?.price;
    product.brandProductId = productInfo?.brandProductId;
  });

  cart = response;

  return NextResponse.json(response);
}

export async function DELETE(request: Request) {
  const productData: CartItem = await request.json();
  cart = cart.filter(
    (product: CartItem) => product?.productId !== productData.productId
  );

  return NextResponse.json({
    message: "Product deleted from cart",
    data: cart,
  });
}

export async function PUT(request: Request) {
  const productData: CartItem = await request.json();
  const productIndex = cart.findIndex(
    (product: CartItem) => product?.productId === productData.productId
  );

  const selectedProduct: CartItem = cart[productIndex];

  cart[productIndex] = {
    ...selectedProduct,
    quantity: productData.quantity,
  };

  return NextResponse.json({ message: "Cart updated", data: cart });
}
