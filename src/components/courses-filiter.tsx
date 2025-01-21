import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FilterState } from "@/types";
import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (
    key: keyof FilterState,
    value: string | number | null
  ) => void;
}

const CHAPTER_RANGES = ["1-15", "15-20", "20-25"];
const INITIAL_VISIBLE_CHAPTERS = 2;
const PRICE_RANGES = ["0-50", "50-100", "100-150", "150+"];
const CATEGORIES = ["UI Design", "UX Design", "Graphic Design", "Web Design"];

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const [showAllChapters, setShowAllChapters] = React.useState(false);
  const visibleChapters = showAllChapters
    ? CHAPTER_RANGES
    : CHAPTER_RANGES.slice(0, INITIAL_VISIBLE_CHAPTERS);

  return (
    <Accordion
      type="multiple"
      defaultValue={["rating", "chapters", "price", "category"]}
      className="w-full"
    >
      <AccordionItem value="rating">
        <AccordionTrigger className="text-sm font-semibold">
          Rating
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() =>
                  onFilterChange(
                    "rating",
                    filters.rating === rating ? null : rating
                  )
                }
                className={cn(
                  "flex items-center w-full hover:text-yellow-500 transition-colors",
                  filters.rating === rating && "text-yellow-500"
                )}
              >
                <div className="flex">
                  {Array(rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="size-4 fill-current mr-1" />
                    ))}
                  {Array(5 - rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 text-muted-foreground mr-1"
                      />
                    ))}
                </div>
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="chapters">
        <AccordionTrigger className="text-sm font-semibold">
          Number of Chapters
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            {visibleChapters.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <Checkbox
                  id={`chapter-${range}`}
                  checked={filters.chapters === range}
                  onCheckedChange={(checked) =>
                    onFilterChange("chapters", checked ? range : null)
                  }
                />
                <label
                  htmlFor={`chapter-${range}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {range}
                </label>
              </div>
            ))}
            {CHAPTER_RANGES.length > INITIAL_VISIBLE_CHAPTERS && (
              <Button
                variant="link"
                className="p-0 h-auto text-xs text-blue-600"
                onClick={() => setShowAllChapters(!showAllChapters)}
              >
                {showAllChapters ? "See Less" : "See More"}
              </Button>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="price">
        <AccordionTrigger className="text-sm font-semibold">
          Price
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            {PRICE_RANGES.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <Checkbox
                  id={`price-${range}`}
                  checked={filters.priceRange === range}
                  onCheckedChange={(checked) =>
                    onFilterChange("priceRange", checked ? range : null)
                  }
                />
                <label
                  htmlFor={`price-${range}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  ${range}
                </label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="category">
        <AccordionTrigger className="text-sm font-semibold">
          Category
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Link
                  href={`/courses/${category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  passHref
                >
                  <Button
                    variant={
                      filters.category === category ? "default" : "outline"
                    }
                    onClick={() =>
                      onFilterChange(
                        "category",
                        filters.category === category ? null : category
                      )
                    }
                  >
                    {category}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
