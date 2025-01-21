import { reviews } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { ReviewCardProps } from "@/types";
import Marquee from "./ui/marquee";

const ReviewCard = ({ image, name, role, body }: ReviewCardProps) => {
  return (
    <Card className="relative container p-6 shadow-lg max-w-md border-border">
      <svg
        width="54"
        height="48"
        viewBox="0 0 54 48"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-5 bottom-5 fill-primary/50 stroke-none size-16"
      >
        <path
          d="M22.4666 47.7451H0.657104V24.332L11.8826 0.598145H23.2684L12.6844 25.9356H22.4666V47.7451ZM52.2942 47.7451H30.4847V24.332L41.7102 0.598145H53.096L42.512 25.9356H52.2942V47.7451Z"
          fillOpacity="0.2"
        />
      </svg>

      <CardContent className="p-0">
        <p className="body-2 leading-relaxed mb-4">&quot;{body}&quot;</p>
      </CardContent>
      <CardHeader className="p-0">
        <div className="flex items-center">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <CardTitle className="body-2">{name}</CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              {role}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

const Reviews = () => {
  const firstRow = reviews.slice(0, reviews.length / 3);
  const secondRow = reviews.slice(reviews.length / 3, (reviews.length * 2) / 3);
  const thirdRow = reviews.slice((reviews.length * 2) / 3);

  return (
    <div className="relative flex h-[700px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review: ReviewCardProps, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="hidden sm:flex [--duration:30s]">
        {secondRow.map((review: ReviewCardProps, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="hidden md:flex [--duration:20s]">
        {thirdRow.map((review: ReviewCardProps, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background"></div>
    </div>
  );
};

export default Reviews;
