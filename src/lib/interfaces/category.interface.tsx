export default interface Category {
    id: number;
    title: string;
    parent_id: number | null;
    category_id: number;
    icon?: string;
    image?: string | null;
    link: string;
    childrens?: Category[];
  }
  