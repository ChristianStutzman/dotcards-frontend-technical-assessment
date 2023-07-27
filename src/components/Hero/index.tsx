import Link from "next/link";
import Image from "next/image";
import styles from "./hero.module.css";
import arrowRight from "@/resources/icons/arrow-right.svg";
import heroImage from "@/resources/images/hero-desktop.png";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.innerContainerLeft}>
        <h4 className={styles.discount}>25&#37; OFF</h4>
        <h2 className={styles.saleText}>Summer Sale</h2>
        <h4 className={styles.subText}>
          Discover our summer styles with discount
        </h4>
        <Link href="/product1" className={styles.saleButtonLink}>
          <div className={styles.saleButton}>
            <span>Shop Now</span>
            <Image src={arrowRight} alt="Arrow facing right" />
          </div>
        </Link>
      </div>
      <div className={styles.innerContainerRight}>
        <Image
          src={heroImage}
          alt="Green and white Nike sneaker"
          className={styles.heroImage}
        />
      </div>
    </div>
  );
};

export default Hero;
