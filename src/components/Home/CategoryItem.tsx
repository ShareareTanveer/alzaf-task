import { FaChevronRight } from "react-icons/fa";

const CategoryItem = ({
  category,
  index,
  hoveredCategory,
  setHoveredCategory,
}: any) => (
  <div
    onMouseEnter={() => setHoveredCategory(index)}
    className={`flex items-center px-2 rounded-md mb-2 cursor-pointer ${
      hoveredCategory === index ? "bg-gray-200" : "hover:bg-gray-100"
    }`}
  >
    <div className="w-full flex justify-between items-center hover:text-orange-500">
      <p>{category.title}</p>
      {category.childrens?.length > 0 && (
        <FaChevronRight className="text-sm font-light" />
      )}
    </div>
  </div>
);
export default CategoryItem;
