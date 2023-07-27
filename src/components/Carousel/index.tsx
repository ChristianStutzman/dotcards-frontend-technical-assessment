import Image from "next/image";
import { useState } from "react";
import ChevronLeft from "@/resources/icons/chevron-left.svg";
import ChevronRight from "@/resources/icons/chevron-right.svg";
import CarouselSlider1 from "@/resources/icons/carousel-slider-1.svg";
import CarouselSlider2 from "@/resources/icons/carousel-slider-2.svg";
import CarouselSlider3 from "@/resources/icons/carousel-slider-3.svg";
import styles from "./Carousel.module.css";

const Carousel = ({ imageSrcs }: { imageSrcs: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const getSliderSvg = (sliderImage: number): string => {
    switch (sliderImage) {
      case 0:
        return CarouselSlider1;
      case 1:
        return CarouselSlider2;
      case 2:
        return CarouselSlider3;

      default:
        return CarouselSlider1;
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <Image
        src={imageSrcs[selectedImage]}
        alt={`Sneaker display image ${selectedImage}`}
        fill
        className={styles.carouselImage}
      />
      <div className={styles.controls}>
        <button
          className={
            selectedImage === 0 ? styles.disabledButton : styles.chevronButton
          }
          aria-disabled={selectedImage === 0}
          onClick={() => setSelectedImage(selectedImage - 1)}
        >
          <Image src={ChevronLeft} alt="Chevron facing left" />
        </button>
        <Image src={getSliderSvg(selectedImage)} alt="Carousel slider" />
        <button
          className={
            selectedImage === 2 ? styles.disabledButton : styles.chevronButton
          }
          aria-disabled={selectedImage === 2}
          onClick={() => setSelectedImage(selectedImage + 1)}
        >
          <Image src={ChevronRight} alt="Chevron facing right" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
