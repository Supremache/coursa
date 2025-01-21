"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { StarRating } from "@/components/ui/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Award, Globe, GraduationCap, Play, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { courses } from "@/constants";
import Reviews from "@/components/reviews";
import { CourseCard } from "@/components/courses-card";
import { Courses } from "@/types";
import { VideoPlayer } from "@/components/VideoPlayer";

const ratings = [
  { stars: 5, percentage: 80 },
  { stars: 4, percentage: 17 },
  { stars: 3, percentage: 5 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 2 },
];

const reviews = [
  {
    name: "Mark Doe",
    date: "22nd March, 2024",
    rating: 5,
    content:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    avatarUrl: "/images/avatar.jpg",
  },
  {
    name: "Mark Doe",
    date: "22nd March, 2024",
    rating: 5,
    content:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    avatarUrl: "/images/avatar.jpg",
  },
  {
    name: "Mark Doe",
    date: "22nd March, 2024",
    rating: 5,
    content:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    avatarUrl: "/images/avatar.jpg",
  },
];

const Course = () => {
  const params = useParams<{ category: string; course: string }>();
  const course = courses.find(
    (c) => c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === params.course
  );

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container py-8">
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
            <BreadcrumbLink href={`/courses/${params.category}`}>
              {params.category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary">
              {params.course}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid gap-8 md:grid-cols-[1fr_400px] mt-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="h3 font-bold">{course.title}</h3>
            <p className="text-muted-foreground">{course.headline}</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <StarRating
                  value={course.rating}
                  setValue={() => course.rating}
                  iconProps={{
                    className: "fill-yellow-400 stroke-yellow-400 size-4",
                  }}
                />
                <span className="ml-2 text-sm text-muted-foreground">
                  ({course.totalRatings} rating)
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                {course.totalHours} Total Hours, {course.totalLectures}{" "}
                Lectures, {course.level}
              </span>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={course.authorImage} alt={course.author} />
                  <AvatarFallback>{course.author}</AvatarFallback>
                </Avatar>
                <span className="text-sm">
                  Created by{" "}
                  <Link
                    href="#"
                    className={cn(buttonVariants({ variant: "link" }), "px-2")}
                  >
                    {course.author}
                  </Link>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6 mr-2 text-muted-foreground" />
                {course.lang.map((lang, index) => (
                  <Badge key={index} variant="secondary">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="py-16">
            <Tabs defaultValue="description">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                <div className="py-8">
                  <h5 className="h5 font-semibold">Course Description</h5>
                  <p className="body-2 text-muted-foreground">
                    {course.description}
                  </p>
                </div>

                <div className="mt-4">
                  <h5 className="h5 font-semibold">Certification</h5>
                  <p className="body-2 text-muted-foreground">
                    {course.certification}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="instructor">
                <div className="py-8">
                  <h5 className="h5 font-semibold">Instructor</h5>
                  <h4 className="h4 text-primary font-semibold">
                    {course.author}
                  </h4>
                  <span className="body-2 text-muted-foreground">
                    {/* Author Role */}
                    UI/UX Designer
                  </span>

                  <div className="flex items-center gap-2 my-6">
                    <Avatar className="h-28 w-28">
                      <AvatarImage
                        src={course.authorImage}
                        alt={course.author}
                      />
                      <AvatarFallback>{course.author}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2 caption">
                      <div>
                        <Award className="inline-flex h-6 w-6 mr-1" /> 40,445
                        Reviews
                      </div>
                      <div>
                        <GraduationCap className="inline-flex h-6 w-6 mr-1" />{" "}
                        500 Students
                      </div>
                      <div>
                        <Play className="inline-flex h-6 w-6 mr-1" /> 15 Courses
                      </div>
                    </div>
                  </div>

                  <span className="body-2 text-muted-foreground">
                    {/* Author Bio */}
                    With over a decade of industry experience, Ronald brings a
                    wealth of practical knowledge to the classroom. He has
                    played a pivotal role in designing user-centric interfaces
                    for renowned tech companies, ensuring seamless and engaging
                    user experiences.
                  </span>
                </div>
              </TabsContent>
              <TabsContent value="syllabus">
                <Accordion type="single" collapsible className="w-full py-8">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <div className="flex-grow">Introduction to UX Design</div>
                      <div className="pr-4">5 Leasons{"  "} 1 hour</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <VideoPlayer
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <div className="flex-grow">
                        Basics of User-Centered Design
                      </div>
                      <div className="pr-4">5 Leasons{"  "} 1 hour</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <VideoPlayer
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      <div className="flex-grow">
                        Elements of User Experience
                      </div>

                      <div className="pr-4">5 Leasons{"  "} 1 hour</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <VideoPlayer
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      <div className="flex-grow">Visual Design Principles</div>

                      <div className="pr-4">5 Leasons{"  "} 1 hour</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <VideoPlayer
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline space-x-2">
                      <h2 className="text-2xl font-semibold">4.6</h2>
                      <StarRating
                        value={5}
                        setValue={() => 5}
                        iconProps={{
                          className: "fill-yellow-400 stroke-yellow-400 size-4",
                        }}
                      />
                      <span className="text-sm text-muted-foreground">
                        146,951 reviews
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {ratings.map(({ stars, percentage }) => (
                      <div key={stars} className="flex items-center gap-4">
                        <div className="flex items-center w-20">
                          <span className="text-sm mr-2">{stars}</span>
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </div>
                        <Progress value={percentage} className="flex-1" />
                        <span className="text-sm text-muted-foreground w-12">
                          {percentage}%
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="divide-y">
                    {reviews.map((review, index) => (
                      <ReviewCard key={index} {...review} />
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button>View more Reviews</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Image
                src="/images/course-thumbnail.png"
                alt="Course thumbnail"
                width={400}
                height={225}
                className="rounded-t-lg"
              />
              <div className="p-6 space-y-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold">$49.5</span>
                  <span className="text-muted-foreground line-through">
                    $99
                  </span>
                  <span className="text-green-500 font-semibold">50% Off</span>
                </div>
                <div className="space-y-2">
                  <Button className="w-full">Add To Cart</Button>
                  <Button variant="outline" className="w-full">
                    Buy Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Share</h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                      x1="9.993"
                      x2="40.615"
                      y1="9.993"
                      y2="40.615"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#2aa4f4"></stop>
                      <stop offset="1" stopColor="#007ad9"></stop>
                    </linearGradient>
                    <path
                      fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                    ></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fillRule="evenodd"
                      d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                    ></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fff"
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    ></path>
                    <path
                      fill="#cfd8dc"
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    ></path>
                    <path
                      fill="#40c351"
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    ></path>
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-screen-sm text-center mx-auto font-semibold">
          <h2 className="h2">What Our Customer Say About Us</h2>
        </div>
        <Reviews />
      </div>

      <div className="py-8">
        <div className="flex items-center justify-between">
          <h3 className="h3">More Courses Like This</h3>
          <Button variant={"link"}>See All</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {courses.slice(0, 4).map((course: Courses) => (
            <div key={course.id}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;

interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  content: string;
  avatarUrl?: string;
}

function ReviewCard({
  name,
  date,
  rating,
  content,
  avatarUrl,
}: ReviewCardProps) {
  return (
    <div className="space-y-4 py-6 border-b last:border-b-0">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{name}</h4>
            <div className="flex items-center space-x-2">
              <StarRating
                value={rating}
                setValue={() => rating}
                iconProps={{
                  className: "fill-yellow-400 stroke-yellow-400 size-4",
                }}
              />
              <span className="text-sm text-muted-foreground">
                Reviewed on {date}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground">{content}</p>
    </div>
  );
}
