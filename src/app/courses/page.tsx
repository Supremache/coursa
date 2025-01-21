"use client";

import * as React from "react";
import { CourseCard } from "@/components/courses-card";
import { courses, instructors } from "@/constants";
import { motion } from "framer-motion";
import { InstructorCard } from "@/components/instructor-card";
import CourseGrid from "@/components/courses-grid";
import { Courses } from "@/types";


export default function Course() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
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
          <h1 className="text-2xl font-bold mb-2">Explore Our Courses</h1>
          <p className="text-muted-foreground">
            Discover a wide range of courses to enhance your skills and
            knowledge across various fields.
          </p>
        </div>

        <CourseGrid courses={courses}/>
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
          {courses.slice(0, 4).map((course: Courses) => (
            <motion.div key={course.id} variants={childVariants}>
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
