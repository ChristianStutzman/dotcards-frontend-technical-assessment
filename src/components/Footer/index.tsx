import styles from "./footer.module.css";
import logoLight from "@/resources/icons/logo-light.svg";
import instagramLogo from "@/resources/icons/instagram.svg";
import twitterLogo from "@/resources/icons/twitter.svg";
import youtubeLogo from "@/resources/icons/youtube.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Link href="/" className={styles.logo}>
        <Image src={logoLight} alt="Sun co. logo light" />
      </Link>
      <span className={styles.legalText}>
        &copy; 2023 dot.cards text task. All rights reserved
      </span>
      <div className={styles.social}>
        <Link href="https://www.instagram.com/dot.cards/" target="_blank">
          <Image src={instagramLogo} alt="Instagram logo" />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <Image
            src={twitterLogo}
            alt="Twitter logo"
            className={styles.spacerLogo}
          />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCgbliwo8oCsQP25CUL-Z5UQ"
          target="_blank"
        >
          <Image src={youtubeLogo} alt="YouTube logo" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
