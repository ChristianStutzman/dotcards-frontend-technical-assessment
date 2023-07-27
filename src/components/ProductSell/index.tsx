import { useState } from "react";
import styles from "./ProductSell.module.css";
import { productDataMap } from "@/config/productData";
import MinusIcon from "@/resources/icons/minus.svg";
import PlusIcon from "@/resources/icons/plus.svg";
import Image from "next/image";

const ProductSell = ({ productData }: { productData: productDataMap }) => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className={styles.productSellContainer}>
      <div className={styles.productInfoContainer}>
        <h2 className={styles.blackText}>{productData.brandName}</h2>
        <h3 className={styles.productName}>{productData.productName}</h3>
        <h3 className={styles.blackText}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(productData.price)}
        </h3>
      </div>
      <div className={styles.addToCartContainer}>
        <h4 className={styles.quantityText}>Quantity</h4>
        <div className={styles.quantityButton}>
          <button
            className={`${styles.minusPlusIcon} ${
              quantity === 1 ? styles.disabledIcon : ""
            }`}
            disabled={quantity === 1}
            onClick={() => setQuantity(quantity - 1)}
          >
            <Image src={MinusIcon} alt="Minus icon" />
          </button>
          <span className={styles.quantityNumber}>{quantity}</span>
          <button
            className={styles.minusPlusIcon}
            onClick={() => setQuantity(quantity + 1)}
          >
            <Image src={PlusIcon} alt="Plus icon" />
          </button>
        </div>
        <div className={styles.addToCartButton}>
          <span>Add to Cart</span>
        </div>
      </div>
    </div>
  );
};

export default ProductSell;
