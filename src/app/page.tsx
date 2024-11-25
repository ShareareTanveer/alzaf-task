import HeroSection from "@/components/Home/HeroSection";
import Category from "@/lib/interfaces/category.interface";

const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch("https://api.shope.com.bd/api/v1/public/hero-categories", {
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export default async function Home() {
  const categories = await fetchCategories();

  return (
    <div className="heroHome">
      <HeroSection categories={categories} />
    </div>
  );
}
