"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StarRating } from "@/components/ui/star-rating";
import { Ellipsis } from "lucide-react";
import React from "react";

interface CourseReviewCardProps {
  name: string;
  rating: number;
  review: string;
}

const myReviews: CourseReviewCardProps[] = Array(9)
  .fill(null)
  .map(() => ({
    name: "Beginner’s Guide to Design",
    rating: 5,
    review:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  }));

export default function Review() {
  return (
    <>
      <div className="flex gap-2 items-start mb-4">
        <h5 className="h5">Reviews</h5>
        <span className="body-2 text-muted-foreground">(12)</span>
      </div>

      <div className="space-y-4">
        {myReviews.map((review, index) => (
          <CourseReviewCard key={index} {...review} />
        ))}
      </div>
    </>
  );
}

function CourseReviewCard({ name, rating, review }: CourseReviewCardProps) {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="body-2">Course Name:</p>
            <span className="body-1 ml-2 inline-flex">{name}</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
                <Ellipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Action</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardTitle>
        <CardDescription className="flex gap-2 items-center text-accent-foreground">
          <p className="body-2">Rating:</p>
           <StarRating
            value={rating}
            setValue={() => rating}
            iconProps={{
              className: "fill-yellow-500 stroke-yellow-500 size-5",
            }}
          />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 p-4">
        <p className="body-2">Review:</p>
        <span className="text-muted-foreground">{review}</span>
      </CardContent>
    </Card>
  );
}
