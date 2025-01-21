import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { StarRating } from "@/components/ui/star-rating";
import { courses } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Courses() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {courses.map((course, index) => (
          <ProfileCourseCard key={index} {...course} />
        ))}
      </div>
      <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
  );
}

interface CourseCardProps {
  title: string;
  author: string;
  rating: number;
  totalRatings: number;
  image: string;
}

function ProfileCourseCard({
  title,
  author,
  rating,
  totalRatings,
  image,
}: CourseCardProps) {
  return (
    //<Link href={"/"}>
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex items-center mb-4">
          <span className="text-xs text-muted-foreground">By:</span>
          <Button variant="link" className="h-6 px-2">
            <Link href={`/users/${author.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{author}</Link>
          </Button>
        </div>

        <Progress value={33} />
      </CardContent>
      <Separator />
      <CardFooter className="py-2 px-4 flex items-center justify-between gap-2 text-muted-foreground">
      <StarRating
            value={rating}
            setValue={() => rating}
            iconProps={{
              className: "fill-yellow-500 stroke-yellow-500 size-5",
            }}
          />
        ({totalRatings.toLocaleString()} Ratings)
      </CardFooter>
    </Card>
    //</Link>
  );
}
