import Link from "next/link"
import Image from "next/image"
import { Mail, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card"
import { AspectRatio } from "./ui/aspect-ratio"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { Instructors } from "@/types"


export function InstructorCard({
  path,
  image,
  author,
  role,
  rating,
  students,
  showRating = true 
}: Instructors) {
  return (
    <Link href={path}>
      <Card className="p-4 pb-2">
        <CardContent className="p-0">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={image}
              alt={author}
              fill
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </CardContent>
        <CardHeader className="text-center">
          <CardTitle className="body-2">{author}</CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            {role}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex-col p-0">
          <Separator />
          <div className="flex items-center justify-between w-full mt-2">
            {showRating ? (
              <>
                <div className="flex items-center gap-1">
                  <Star className="fill-yellow-500 stroke-yellow-500" />
                  <span className="body-2">{rating}</span>
                </div>
                <p className="body-2 text-muted-foreground">
                  {students} Students
                </p>
              </>
            ) : (
              <Button className="w-full">
                Send Message
                <Mail/>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}