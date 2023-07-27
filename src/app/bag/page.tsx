"use client";
import CartDisplay from "@/components/CartDisplay";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import CheckoutDisplay from "@/components/CheckoutDisplay";

const Bag = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProductData = await fetch("http://localhost:3000/api/bag", {
        method: "GET",
      });
      const data = await fetchedProductData.json();
      setCartData(data);
    };
    fetchData();
  }, []);

  const workingCartData = [...cartData];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.cartDisplay}>
          <h2 className={styles.headerText}>Your Bag</h2>
          {workingCartData.length ? (
            <>
              {workingCartData.map((product, index) => (
                <CartDisplay
                  productData={product}
                  key={index}
                  setCartData={setCartData}
                />
              ))}
            </>
          ) : (
            <h3 className={styles.emptyCartText}>Your bag is empty</h3>
          )}
        </div>
        <div className={styles.checkoutContainer}>
          <CheckoutDisplay cartData={workingCartData} />
        </div>
      </div>
    </main>
  );
};

export default Bag;
