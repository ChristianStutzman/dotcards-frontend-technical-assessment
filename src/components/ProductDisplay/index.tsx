import { productDataMap } from "@/config/productData";
import styles from "./ProductDisplay.module.css";
import ProductPreviewCard from "../ProductPreviewCard";

const ProductDisplay = ({ products }: { products: productDataMap[] }) => {
  return (
    <div>
      <h2 className={styles.header}>Explore our latest drops</h2>
      <div className={styles.previewCardContainer}>
        {products.map(
          ({ brandName, productName, price, brandProductId, productId }) => (
            <ProductPreviewCard
              brandName={brandName}
              productName={productName}
              price={price}
              key={productId}
              brandProductId={brandProductId}
              productId={productId}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
