import Link from "next/link";
import styles from "./viewCartbutton.module.css";
import bagIcon from "@/resources/icons/bag-icon.svg";
import Image from "next/image";

const ViewCartButton = () => {
  return (
    <Link href="/bag">
      <div className={styles.viewCartButton}>
        <Image src={bagIcon} alt="Bag icon" />
        <span className={styles.buttonText}>View Cart</span>
      </div>
    </Link>
  );
};

export default ViewCartButton;
