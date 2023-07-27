"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import { productDataMap } from "@/config/productData";
import { useEffect, useState } from "react";
import ProductDisplay from "@/components/ProductDisplay";

const Home = () => {
  const [productData, setProductData] = useState<productDataMap[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProductData = await fetch(
        "http://localhost:3000/api/products",
        { method: "GET" }
      );
      const data = await fetchedProductData.json();

      setProductData(data);
    };
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Hero />
        <ProductDisplay products={productData} />
      </div>
    </main>
  );
};

export default Home;
