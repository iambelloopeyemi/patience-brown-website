"use client";
import { useState, useEffect } from "react";

export function useScroll() {
  const [isScrolled, setScrolled] = useState(false);
  const [heroSectionHeight, setHeroSectionHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled: number = window.scrollY;

      setHeroSectionHeight(document.getElementById("header")!.offsetHeight);

      if (scrolled > heroSectionHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroSectionHeight]);

  return isScrolled;
}
