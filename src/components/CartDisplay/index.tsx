import Image from "next/image";
import styles from "./CartDisplay.module.css";
import MinusIcon from "@/resources/icons/minus.svg";
import PlusIcon from "@/resources/icons/plus.svg";

export interface CartItem {
  productId: number;
  quantity: number;
  brandName: string;
  productName: string;
  price: number;
  brandProductId: number | null;
}

const CartDisplay = ({
  productData,
  setCartData,
}: {
  productData: CartItem;
  setCartData: Function;
}) => {
  const handleUpdateQuantity = async (newQuantity: number) => {
    const response = await fetch("http://localhost:3000/api/bag", {
      method: "PUT",
      body: JSON.stringify({
        productId: productData.productId,
        quantity: newQuantity,
      }),
    });

    const result = await response.json();
    console.log({ result });
    setCartData(result.data);
  };

  const handleRemoveFromCart = async () => {
    const response = await fetch("http://localhost:3000/api/bag", {
      method: "DELETE",
      body: JSON.stringify({
        productId: productData.productId,
      }),
    });

    const result = await response.json();
    setCartData(result.data);
  };

  return (
    <div className={styles.container}>
      <Image
        src={`/images/desktop/${productData?.brandName}${
          productData?.brandProductId || ""
        }/image-5.png`}
        alt={`${productData.productName} thumbnail`}
        width={165}
        height={165}
      />
      <div className={styles.textContainer}>
        <div className={styles.upperTextContainer}>
          <div className={styles.upperTextContainerLeft}>
            <h3 className={styles.brandName}>{productData.brandName}</h3>
            <h4 className={styles.productName}>{productData.productName}</h4>
          </div>
          <h4 className={styles.price}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(productData.price)}
          </h4>
        </div>
        <div className={styles.lowerTextContainer}>
          <div className={styles.quantityButton}>
            <button
              className={`${styles.minusPlusIcon} ${
                productData.quantity === 1 ? styles.disabledIcon : ""
              }`}
              disabled={productData.quantity === 1}
              onClick={() => handleUpdateQuantity(productData.quantity - 1)}
            >
              <Image src={MinusIcon} alt="Minus icon" />
            </button>
            <span className={styles.quantityNumber}>
              {productData.quantity}
            </span>
            <button
              className={styles.minusPlusIcon}
              onClick={() => handleUpdateQuantity(productData.quantity + 1)}
            >
              <Image src={PlusIcon} alt="Plus icon" />
            </button>
          </div>
          <button className={styles.removeText} onClick={handleRemoveFromCart}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDisplay;
