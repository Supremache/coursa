"use client";

import { courses, instructors } from "@/constants";
import CourseGrid from "@/components/courses-grid";
import { motion } from "framer-motion";
import { InstructorCard } from "@/components/instructor-card";
import { CourseCard } from "@/components/courses-card";
import { useParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Category() {
  const params = useParams<{ category: string }>();
  console.log(`Category: ${params.category}`);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">
            Explore Our <span className="capitalize">{params.category}</span>{" "}
            Courses
          </h1>
          <p className="text-muted-foreground">
            Discover a wide range of courses to enhance your skills and
            knowledge across various fields.
          </p>
        </div>
        
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="capitalize">
                {params.category}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <CourseGrid
          courses={courses}
          category={params.category}
          showFilters={false}
        />
      </section>

      <motion.section
        className="container py-12 md:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3 className="h3" variants={childVariants}>
          Popular Mentors
        </motion.h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
          {instructors.map((instr) => (
            <motion.div key={instr.id} variants={childVariants}>
              <InstructorCard {...instr} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="container py-12 md:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3 className="h3" variants={childVariants}>
          Featured Courses
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {courses.map((course) => (
            <motion.div key={course.id} variants={childVariants}>
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
