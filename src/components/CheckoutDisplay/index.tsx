import styles from "./CheckoutDisplay.module.css";
import { CartItem } from "../CartDisplay";
import Image from "next/image";
import ArrowRight from "@/resources/icons/arrow-right.svg";

const CheckoutDisplay = ({ cartData }: { cartData: CartItem[] }) => {
  const subtotal: number = cartData.reduce(
    (acc, product: CartItem) => acc + product.price * product.quantity,
    0
  );
  const salesTax: number = subtotal * 0.0725;
  const shipping: number = cartData.length ? 20 : 0;
  const discount: number = subtotal * 0.25;
  const total: number = subtotal + salesTax + shipping - discount;

  return (
    <div className={styles.container}>
      <div className={styles.upperContainer}>
        <h2 className={styles.headerText}>Summary</h2>
        <div className={styles.row}>
          <span className={styles.rowTextLeft}>Subtotal</span>
          <span className={styles.rowTextRight}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(subtotal)}
          </span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowTextLeft}>Shipping and delivery</span>
          <span className={styles.rowTextRight}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(shipping)}
          </span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowTextLeft}>Tax</span>
          <span className={styles.rowTextRight}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(salesTax)}
          </span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowTextLeft}>Discount</span>
          <span className={styles.discountText}>
            -
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(discount)}
          </span>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.totalsRow}>
          <span className={styles.totalText}>Total</span>
          <span className={styles.rowTextRight}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(total)}
          </span>
        </div>
        <button className={styles.checkoutButton}>
          <span>Checkout</span>
          <Image src={ArrowRight} alt="arrow facing right" />
        </button>
      </div>
    </div>
  );
};

export default CheckoutDisplay;
