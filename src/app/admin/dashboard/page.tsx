"use client";

import { OverviewChart } from "@/components/dashboard/chart-card";
import { CourseCard } from "@/components/dashboard/courses/course-card";
import { courses } from "@/constants";
import { BarChart, Users, BookOpen, DollarSign } from "lucide-react";

const chartData = [
  {
    month: "January",
    students: 186,
    courses: 10,
    revenue: 8672,
    completion: 16,
  },
  {
    month: "February",
    students: 305,
    courses: 12,
    revenue: 13842,
    completion: 35,
  },
  { month: "March", students: 237, courses: 18, revenue: 2686, completion: 67 },
  { month: "April", students: 73, courses: 23, revenue: 13672, completion: 5 },
  { month: "May", students: 209, courses: 30, revenue: 18842, completion: 128 },
  { month: "June", students: 214, courses: 34, revenue: 24260, completion: 99 },
];

const chartConfig = {
  students: {
    label: "Students",
    color: "hsl(var(--chart-1))",
  },
  courses: {
    label: "Courses",
    color: "hsl(var(--chart-2))",
  },
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-3))",
  },
  completion: {
    label: "Completion",
    color: "hsl(var(--chart-4))",
  },
};

export default function Dashboard() {
  const total = chartData.reduce((total, data) => total + data.students, 0);

  return (
    <div className="p-6 space-y-6">
      <h3 className="h3 font-bold">Dashboard Overview</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <OverviewChart
          icon={Users}
          label="Students"
          description={`${total}`}
          adjustment={{
            value: 20,
            trend: "up",
          }}
          chartData={chartData}
          chartConfig={chartConfig}
        />
        <OverviewChart
          icon={BookOpen}
          label="Courses"
          description={`${total}`}
          adjustment={{
            value: 6,
            trend: "up",
          }}
          chartData={chartData}
          chartConfig={chartConfig}
        />
        <OverviewChart
          icon={DollarSign}
          label="Revenue"
          description={`$${total}`}
          adjustment={{
            value: 23,
            trend: "up",
          }}
          chartData={chartData}
          chartConfig={chartConfig}
        />
        <OverviewChart
          icon={BarChart}
          label="Completion" // Course Completion Rate
          description={`68%`}
          adjustment={{
            value: 6,
            trend: "down",
          }}
          chartData={chartData}
          chartConfig={chartConfig}
        />
      </div>

      <div>
        <div className="py-8">
          <h3 className="h3 font-bold">Courses</h3>
          <p className="body-2 text-muted-foreground">
            Our latest relassed courses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
