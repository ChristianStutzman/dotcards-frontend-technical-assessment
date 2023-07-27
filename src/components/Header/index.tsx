import styles from "./header.module.css";
import logoDark from "@/resources/icons/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";
import ViewCartButton from "../ViewCartButton";
import { useState, useEffect } from "react";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <Image src={logoDark} alt="Sun co. logo dark" />
      </Link>
      <ViewCartButton />
    </header>
  );
};

export default Header;
