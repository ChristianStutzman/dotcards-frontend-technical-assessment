"use client";

import { useEffect, useState } from "react";
import { productDataMap } from "@/config/productData";
import styles from "./page.module.css";
import Carousel from "@/components/Carousel";
import ProductSell from "@/components/ProductSell";
import ProductDescription from "@/components/ProductDescription";

const ProductPage = ({ params }: { params: { productId: number } }) => {
  const productId: number = Number(params.productId);

  const [productData, setProductData] = useState<productDataMap>({
    brandName: "",
    productName: "",
    price: 0,
    brandProductId: null,
    productId: 0,
    productDescription: "",
    productSpecs: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProductData = await fetch(
        "http://localhost:3000/api/products",
        { method: "GET" }
      );
      const data = await fetchedProductData.json();

      const singleProduct = data.find(
        (product: productDataMap) => product.productId === productId
      );

      setProductData(singleProduct);
    };
    fetchData();
  }, [productId]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Carousel
            imageSrcs={[
              `/images/desktop/${productData?.brandName}${
                productData?.brandProductId || ""
              }/image-1.png`,
              `/images/desktop/${productData?.brandName}${
                productData?.brandProductId || ""
              }/image-2.png`,
              `/images/desktop/${productData?.brandName}${
                productData?.brandProductId || ""
              }/image-3.png`,
            ]}
          />
          <ProductSell productData={productData} />
        </div>
        <ProductDescription productData={productData} />
      </div>
    </main>
  );
};

export default ProductPage;
