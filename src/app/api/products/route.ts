import { NextResponse } from "next/server";
import { productData } from "@/config/productData";

export async function GET() {
  const res = {
    data: productData,
  };

  return NextResponse.json(res.data);
}
