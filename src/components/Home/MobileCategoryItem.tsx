"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Category from "@/lib/interfaces/category.interface";
import { ChevronDownIcon } from "lucide-react";

const MobileCategoryItem = ({ category }: { category: Category }) => (
  <Accordion type="single" collapsible>
    <AccordionItem value="category" className="border-0">
      <AccordionTrigger className="p-3 rounded-md text-lg flex justify-between items-center hover:no-underline border-0">
        <div className="flex justify-between items-center w-full">
          <p>{category.title}</p>
         <p>{category.childrens && category.childrens.length > 0 && (
            <ChevronDownIcon className="h-5 w-5 text-gray-600" />
          )}</p> 
        </div>
      </AccordionTrigger>

      {/* Show AccordionContent only if there are subcategories */}
      {category.childrens && category.childrens.length > 0 && (
        <AccordionContent className="ml-4">
          {category.childrens?.map((sub: Category, subIndex: number) => (
            <Accordion key={subIndex} type="single" collapsible>
              <AccordionItem className="border-0" value={`subcategory-${subIndex}`}>
                <AccordionTrigger className="p-2 rounded-md hover:bg-gray-100 text-lg no-underline hover:no-underline">
                  <div className="flex justify-between items-center w-full">
                    <span>{sub.title}</span>
                    {sub.childrens && sub.childrens.length > 0 && (
                      <ChevronDownIcon className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                </AccordionTrigger>
                {/* Show subcategory children if they exist */}
                {sub.childrens && sub.childrens.length > 0 && (
                  <AccordionContent className="ml-4 rounded-md p-2 no-underline">
                    {sub.childrens?.map((subSub: Category, subSubIndex: number) => (
                      <div key={subSubIndex} className="ml-2 p-2 rounded-md">
                        {subSub.title}
                      </div>
                    ))}
                  </AccordionContent>
                )}
              </AccordionItem>
            </Accordion>
          ))}
        </AccordionContent>
      )}
    </AccordionItem>
  </Accordion>
);

export default MobileCategoryItem;
