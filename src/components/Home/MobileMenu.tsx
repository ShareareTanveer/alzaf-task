"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Category from "@/lib/interfaces/category.interface";
import MobileCategoryItem from "./MobileCategoryItem";

const MobileMenu = ({ categories }: any) => (
  <Sheet>
    <SheetTrigger asChild className="md:hidden m-4">
      <button className="px-6 py-2 bg-white text-black rounded-md">
        Categories
      </button>
    </SheetTrigger>
    <SheetContent
      side="left"
      className="w-full bg-white text-black p-4 space-y-2 overflow-y-auto"
    >
      <div className="flex flex-col">
        {categories.map((category: Category, index: number) => (
          <div key={index}>
            <MobileCategoryItem category={category} />
          </div>
        ))}
      </div>
    </SheetContent>
  </Sheet>
);

export default MobileMenu;
