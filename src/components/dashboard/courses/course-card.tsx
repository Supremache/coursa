import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Book, Users, Clock, Award, ShoppingCart, Edit, Trash2 } from "lucide-react"
import { Courses } from "@/types"
import { Separator } from "@/components/ui/separator"

interface CourseCardProps {
  course: Courses
  onDelete?: (id: number) => void
}

export function CourseCard({ course, onDelete }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full w-full mx-auto overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48">
          <Image src={course.image || "/placeholder.svg"} alt={course.title} layout="fill" objectFit="cover" />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Badge className="mb-2">{course.category}</Badge>
        <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
        <p className="text-sm text-gray-500 mb-2">by {course.author}</p>
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="font-bold mr-1">{course.rating}</span>
          <span className="text-sm text-gray-500">({course.totalRatings} ratings)</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <Book className="w-4 h-4 mr-1" />
            <span>{course.chapters} chapters</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.orders} orders</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.totalHours} hours</span>
          </div>
          <div className="flex items-center">
            <Award className="w-4 h-4 mr-1" />
            <span>{course.certificate ? "Certificate" : "No Certificate"}</span>
          </div>
        </div>
      </CardContent>
      <Separator className="my-2"/> 
      <CardFooter className="flex justify-between items-center px-4 py-2 bg-gray-50">
        <div className="flex items-center">
          <ShoppingCart className="w-4 h-4 mr-1" />
          <span className="font-bold">${course.price.toFixed(2)}</span>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Edit className="w-4 h-4 mr-1" />
            Edit
          </Button>
          <Button variant="destructive" size="sm" onClick={() => onDelete?.(course.id)}>
            <Trash2 className="w-4 h-4 mr-1" />
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

