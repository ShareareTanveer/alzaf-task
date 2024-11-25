"use client";
import { useState } from "react";
import Category from "@/lib/interfaces/category.interface";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

interface HeroSectionProps {
  categories: Category[];
}

const HeroSection = ({ categories }: HeroSectionProps) => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState<number | null>(null);

  return (
    <div
      className="relative h-[400px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url('/hero.png')` }}
    >
      <DesktopMenu
        categories={categories}
        isLoading={false}
        hoveredCategory={hoveredCategory}
        hoveredSubcategory={hoveredSubcategory}
        setHoveredCategory={setHoveredCategory}
        setHoveredSubcategory={setHoveredSubcategory}
      />

      <MobileMenu
        categories={categories}
      />
    </div>
  );
};

export default HeroSection;
