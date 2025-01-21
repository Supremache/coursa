"use client";

import { CourseCard } from "@/components/courses-card";
import { Footer } from "@/components/footer";
import { InstructorCard } from "@/components/instructor-card";
import { Navbar } from "@/components/navBar";
import Reviews from "@/components/reviews";
import { CircularProgress } from "@/components/ui/animated-circular-progress-bar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import AvatarCircles from "@/components/ui/avatar-circles";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NumberTicker from "@/components/ui/number-ticker";
import { categories, courses, instructors, stats } from "@/constants";
import { motion } from "framer-motion";
import { ChevronRight, FileBadge} from "lucide-react";

import Image from "next/image";
import React from "react";

const avatars = [
  {
    imageUrl: "/images/avatar-1.png",
    profileUrl: "#",
  },
  {
    imageUrl: "/images/avatar-1.png",
    profileUrl: "#",
  },
  {
    imageUrl: "/images/avatar-1.png",
    profileUrl: "#",
  },
  {
    imageUrl: "/images/avatar-1.png",
    profileUrl: "#",
  },
  {
    imageUrl: "/images/avatar-1.png",
    profileUrl: "#",
  },
];

export default function Home() {
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
      <Navbar />
      <motion.section
        className="container relative overflow-hidden py-32 md:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Content */}
          <motion.div
            className="flex flex-col justify-center space-y-6 order-2 lg:order-1"
            variants={childVariants}
          >
            <h1 className="h1">Unlock Your Potential with Coursa</h1>
            <p className="max-w-screen-sm body-1 text-muted-foreground">
              Welcome to Coursa, where learning knows no bounds. We believe that
              education is the key to personal and professional growth, and
              we&apos;re here to guide you on your success.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button size="lg" className="gap-2">
                Start your instructor journey
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div className="order-1 lg:order-2" variants={childVariants}>
            <div className="relative max-w-sm rounded-[6rem] bg-primary/60 mx-auto">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="/images/hero.png"
                  alt="Professional instructor with a tablet"
                  fill
                  className="object-contain h-auto max-w-screen-sm mx-auto"
                />
              </AspectRatio>

              {/* Number of courses */}
              <div className="absolute -bottom-6 -left-4 sm:bottom-8 sm:-left-16 rounded-lg bg-background py-2 px-4 shadow-lg backdrop-blur-sm flex items-start justify-start gap-2">
                <div className="bg-primary/30 text-primary rounded-full p-2">
                  <FileBadge />
                </div>

                <div className="space-y-2 text-center">
                  <p className="text-sm text-muted-foreground">
                    Number of courses sold
                  </p>
                  <p className="body-2">100,000+</p>
                </div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute -top-24 -left-4 sm:-left-28 sm:top-8 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm text-center space-y-2">
                <AvatarCircles numPeople={99} avatarUrls={avatars} />
                <div className="text-sm">
                  <p className="font-medium">Join our community</p>
                  <p className="text-muted-foreground">of 100K+ Students</p>
                </div>
              </div>

              {/* Completion Rate */}
              <div className="absolute -right-6 top-1/3 sm:-top-16 sm:-right-16 rounded-lg bg-background py-2 px-4 shadow-lg backdrop-blur-sm max-w-[180px] text-center mx-auto">
                <div className="flex flex-col items-center">
                  <CircularProgress
                    value={89}
                    size={100}
                    strokeWidth={10}
                    showLabel
                    labelClassName="body-1"
                    className="stroke-secondary"
                    progressClassName="stroke-primary"
                  />
                  <p className="text-sm text-muted-foreground">
                    Completion rate of our courses
                  </p>
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute -right-8 -bottom-12 opacity-50 -z-10">
                <svg width="96" height="200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    {/* Define the repeating pattern */}
                    <pattern
                      id="dots-pattern"
                      x="0"
                      y="0"
                      width="15"
                      height="15"
                      patternUnits="userSpaceOnUse"
                    >
                      {/* Single dot */}
                      <circle cx="10" cy="10" r="2" fill="#4f8ff6" />
                    </pattern>
                  </defs>
                  {/* Apply the pattern as a background */}
                  <rect width="100%" height="100%" fill="url(#dots-pattern)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="container bg-secondary py-12 md:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="flex flex-col items-center justify-center space-y-2 text-center"
              >
                <div className="relative">
                  <span className="h1">
                    <NumberTicker value={stat.value} />+
                  </span>
                  {/* Decorative dot */}
                  <span className="absolute -right-2 -top-1 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                  </span>
                </div>
                <p className="max-w-sm text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="container py-12 md:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex items-center justify-between"
          variants={childVariants}
        >
          <h3 className="h3">Top Categories</h3>
          <Button variant={"link"}>See All</Button>
        </motion.div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {categories.map((cate, index) => (
            <motion.div key={index} variants={childVariants}>
              <Card className="-space-y-8 py-8">
                <CardContent className="flex items-center justify-center">
                  <div className="bg-primary/30 p-6 text-primary rounded-full">
                    {<cate.icon />}
                  </div>
                </CardContent>

                <CardHeader className="text-center">
                  <CardTitle className="body-1">{cate.label}</CardTitle>
                  <CardDescription className="text-muted-foreground body-2">
                    {cate.value} Courses
                  </CardDescription>
                </CardHeader>
              </Card>
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
        <motion.div
          className="flex items-center justify-between"
          variants={childVariants}
        >
          <h3 className="h3">Top Courses</h3>
          <Button variant={"link"}>See All</Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {courses.slice(0, 4).map((course) => (
            <motion.div key={course.id} variants={childVariants}>
              <CourseCard {...course} />
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
        <motion.div
          className="flex items-center justify-between"
          variants={childVariants}
        >
          <h3 className="h3">Top Instructors</h3>
          <Button variant={"link"}>See All</Button>
        </motion.div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
          {instructors.slice(0, 5).map((instr) => (
            <motion.div key={instr.id} variants={childVariants}>
              <InstructorCard {...instr}/>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="container py-12 md:py-16 space-y-6">
      <div className="max-w-screen-sm text-center mx-auto font-semibold">
        <h2 className="h2">What Our Customer Say About Us</h2>
        </div>
        <Reviews />
      </section>

      <motion.section
        className="container py-12 md:py-16 space-y-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* First Row */}
        <motion.div
          className="flex flex-col items-center md:flex-row justify-center gap-32"
          variants={childVariants}
        >
          <Image
            src="/images/instructor.png"
            alt="Instructor"
            width={400}
            height={420}
            className="object-contain"
          />

          <motion.div
            className="space-y-4 max-w-screen-sm text-center md:text-left"
            variants={childVariants}
          >
            <h2 className="text-2xl font-semibold">Become an Instructor</h2>
            <p className="text-muted-foreground">
              Instructors from around the world teach millions of students on
              Byway. We provide the tools and skills to teach what you love.
            </p>
            <Button size="lg" className="mt-4 group">
              Start Your Instructor Journey
              <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Second Row */}
        <motion.div
          className="flex flex-col items-center md:flex-row-reverse gap-8 md:gap-32"
          variants={childVariants}
        >
          <Image
            src="/images/student.png"
            alt="Student"
            width={400}
            height={420}
            className="object-contain"
          />

          <motion.div
            className="space-y-4 max-w-screen-sm text-center md:text-left"
            variants={childVariants}
          >
            <h2 className="text-2xl font-semibold">
              Transform your life through education
            </h2>
            <p className="text-muted-foreground">
              Learners around the world are launching new careers, advancing in
              their fields, and enriching their lives.
            </p>
            <Button size="lg" className="mt-4 group">
              Checkout Courses
              <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
}
