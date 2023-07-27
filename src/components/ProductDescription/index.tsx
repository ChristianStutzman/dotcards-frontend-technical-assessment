import Image from "next/image";
import styles from "./ProductDescription.module.css";
import { productDataMap } from "@/config/productData";

const ProductDescription = ({
  productData,
}: {
  productData: productDataMap;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <h3 className={styles.descriptionHeader}>Description</h3>
        <span className={styles.descriptionText}>
          {productData.productDescription}
        </span>
        <ul className={styles.descriptionText}>
          {productData.productSpecs.map((spec: string) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
      </div>
      <Image
        src={`/images/desktop/${productData?.brandName}${
          productData?.brandProductId || ""
        }/image-4.png`}
        alt="Alternate style of shoe"
        className={styles.productImage}
        fill
      />
    </div>
  );
};

export default ProductDescription;
