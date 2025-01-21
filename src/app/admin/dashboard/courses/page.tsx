"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { courses } from "@/constants"
import { Courses } from "@/types"
import { CourseCard } from "@/components/dashboard/courses/course-card"


export default function CoursesPage() {
  const [filteredCourses, setFilteredCourses] = useState<Courses[]>(courses)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")

  useEffect(() => {
    const filtered = courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = categoryFilter === "" || course.category === categoryFilter
      return matchesSearch && matchesCategory
    })
    setFilteredCourses(filtered)
  }, [searchTerm, categoryFilter])

  const handleDeleteCourse = (id: number) => {
    setFilteredCourses((prevCourses) => prevCourses.filter((course) => course.id !== id))
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Label htmlFor="search">Search Courses</Label>
          <Input
            id="search"
            placeholder="Search by course title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-64">
          <Label htmlFor="category">Filter by Category</Label>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger id="category">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="data-science">Data Science</SelectItem>
              <SelectItem value="mobile-development">Mobile Development</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} onDelete={handleDeleteCourse} />
        ))}
      </div>
    </div>
  )
}

