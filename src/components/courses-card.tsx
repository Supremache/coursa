import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { AspectRatio } from "./ui/aspect-ratio";
import { Courses } from "@/types";
import { StarRating } from "./ui/star-rating";

export function CourseCard({
  image,
  category,
  title,
  totalHours,
  totalLectures,
  author,
  rating,
  totalRatings,
  price,
}: Courses) {
  return (
    <Card className="flex flex-col p-4 h-full w-full mx-auto">
      <CardContent className="p-0">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </CardContent>
      <CardHeader className="p-0 pt-2 flex-grow">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground body-2">
            ({totalRatings} Ratings)
          </span>
          <StarRating
            value={rating}
            setValue={() => rating}
            iconProps={{
              className: "fill-yellow-500 stroke-yellow-500 size-5",
            }}
          />
        </div>
        <CardTitle className="body-1">
          {title}
          <div className="flex items-center">
            <span className="text-xs text-muted-foreground">By:</span>
            <Button variant="link" className="h-6 px-2">
              <Link href={`/users/${author.toLowerCase()}`}>{author}</Link>
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start p-0 pt-2">
        <p className="caption text-muted-foreground">
          {totalHours} Total Hours. {totalLectures} Lectures. Beginner
        </p>
        <Separator className="my-1" />
        <div className="flex items-center text-muted-foreground caption">
          Category:
          <Button variant="link" className="px-2 h-6 capitalize font-semibold">
            <Link href={`/courses/${category}`}>{category}</Link>
          </Button>
        </div>
        <div className="flex items-end justify-between w-full mt-2">
          <h6 className="h6">${price}</h6>
          <Button className="flex-shrink-0">
            <Link
              href={`/courses/${category}/${title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`}
            >
              Explore Course
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
