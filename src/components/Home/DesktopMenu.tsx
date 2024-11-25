import Category from "@/lib/interfaces/category.interface";
import { SkeletonFormLoader } from "../loader/SkeletonFormLoader";
import CategoryItem from "./CategoryItem";
import SubcategoryMenu from "./SubcategoryMenu";

const DesktopMenu = ({
  categories,
  isLoading,
  hoveredCategory,
  hoveredSubcategory,
  setHoveredCategory,
  setHoveredSubcategory,
}: any) => (
  <div className="hidden md:flex absolute left-[5%] inset-0">
    <div
      className="bg-white border-r h-[390px] w-[300px] p-4 overflow-scroll"
      onMouseLeave={() => {
        setHoveredCategory(null);
        setHoveredSubcategory(null);
      }}
    >
      {isLoading ? (
        <SkeletonFormLoader />
      ) : (
        categories.map((category: Category, index: number) => (
          <CategoryItem
            key={index}
            category={category}
            index={index}
            hoveredCategory={hoveredCategory}
            setHoveredCategory={setHoveredCategory}
          />
        ))
      )}
    </div>

    {hoveredCategory !== null &&
      categories[hoveredCategory]?.childrens?.length > 0 && (
        <SubcategoryMenu
          categories={categories}
          hoveredCategory={hoveredCategory}
          hoveredSubcategory={hoveredSubcategory}
          setHoveredSubcategory={setHoveredSubcategory}
          setHoveredCategory={setHoveredCategory}
        />
      )}
  </div>
);

export default DesktopMenu;
