import Image from "next/image";
import styles from "./productPreviewCard.module.css";
import Link from "next/link";

const ProductPreviewCard = ({
  brandName,
  productName,
  price,
  brandProductId,
  productId,
}: {
  brandName: string;
  productName: string;
  price: number;
  brandProductId: number | null;
  productId: number;
}) => {
  return (
    <Link href={`/product/${productId}`}>
      <Image
        src={`/images/desktop/${brandName}${brandProductId || ""}/image-5.png`}
        alt={`Product display photo featuring the ${productName} sneaker`}
        width={261}
        height={284}
      />
      <h4 className={styles.brandNameText}>{brandName}</h4>
      <h5 className={styles.productNameText}>{productName}</h5>
      <h4 className={styles.priceText}>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </h4>
    </Link>
  );
};

export default ProductPreviewCard;
