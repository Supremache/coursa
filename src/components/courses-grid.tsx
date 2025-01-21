"use client";

import React, { useMemo, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Courses, FilterState } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterSidebar } from "./courses-filiter";
import { CourseCard } from "./courses-card";
import { Button } from "./ui/button";

interface CoursesGridProps {
    courses: Courses[];
    category?: string // Optional category prop for filtering
    showFilters?: boolean // Optional prop to show/hide filters
  }

export default function CourseGrid({ courses, category, showFilters = true }: CoursesGridProps) {
  const [sortBy, setSortBy] = useState<string>("relevance");

  const [filters, setFilters] = useState<FilterState>({
    rating: null as number | null,
    chapters: null as string | null,
    priceRange: null as string | null,
    category: null as string | null,
  })

  const handleFilterChange = (key: string, value: number | string | null) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      // Category filter
      if (category && course.category.toLowerCase().replace(/-/g, ' ') !== category.toLowerCase().replace(/-/g, ' ')) {
        return false
      }

      // Price filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number)
        if (course.price < min || (max && course.price > max)) return false
      }

      // Rating filter
      if (filters.rating && course.rating < filters.rating) {
        return false
      }

      return true
    })
  }, [courses, category, filters])

  const sortedCourses = useMemo(() => {
    return [...filteredCourses].sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [filteredCourses, sortBy]);

  return (
    <div className="flex gap-6">
    {showFilters && (
      <>
        {/* Mobile Filter Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden">
              Filter
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] h-full overflow-y-scroll"
          >
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </SheetContent>
        </Sheet>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-[250px] flex-shrink-0">
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        </div>
      </>
    )}

      <div className="flex-1">
        <div className="flex justify-end mb-6">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}
