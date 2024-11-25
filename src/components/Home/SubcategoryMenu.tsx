import Category from "@/lib/interfaces/category.interface";
import { FaChevronRight } from "react-icons/fa";

const SubcategoryMenu = ({
  categories,
  hoveredCategory,
  hoveredSubcategory,
  setHoveredSubcategory,
  setHoveredCategory,
}: any) => (
  <div
    className="bg-white h-[390px] w-[300px] p-4 relative"
    onMouseEnter={() => setHoveredCategory(hoveredCategory)}
    onMouseLeave={() => {
      setHoveredCategory(null);
      setHoveredSubcategory(null);
    }}
  >
    {categories[hoveredCategory]?.childrens?.map(
      (sub: Category, subIndex: number) => (
        <div
          key={subIndex}
          onMouseEnter={() => setHoveredSubcategory(subIndex)}
          className="px-2 mb-2 rounded-md hover:bg-gray-100 cursor-pointer"
        >
          <div className="flex justify-between items-center hover:text-orange-500">
            <p>{sub.title}</p>
            {sub?.childrens&&sub?.childrens?.length > 0 && (
              <FaChevronRight className="text-sm font-light" />
            )}
          </div>

          {hoveredSubcategory === subIndex && sub.childrens && (
            <div
              className="absolute left-full top-0 bg-white h-[390px] w-[300px] p-4 border-l overflow-scroll"
              style={{ zIndex: 10 }}
            >
              {sub.childrens.map((subSub: Category, subSubIndex: number) => (
                <div
                  key={subSubIndex}
                  className="px-2 mb-2 rounded-md hover:bg-gray-300 cursor-pointer"
                >
                  {subSub.title}
                </div>
              ))}
            </div>
          )}
        </div>
      )
    )}
  </div>
);

export default SubcategoryMenu;
