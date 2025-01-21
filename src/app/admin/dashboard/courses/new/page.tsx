"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/hooks/use-toast"


const courseFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  author: z.string().min(2, {
    message: "Author name must be at least 2 characters.",
  }),
  price: z.number().min(0, {
    message: "Price must be a positive number.",
  }),
  level: z.enum(["Beginner", "Intermediate", "Advanced"]),
  totalHours: z.number().min(1, {
    message: "Total hours must be at least 1.",
  }),
  totalLectures: z.number().min(1, {
    message: "Total lectures must be at least 1.",
  }),
})

type CourseFormValues = z.infer<typeof courseFormSchema>

const defaultValues: Partial<CourseFormValues> = {
  title: "",
  category: "",
  description: "",
  author: "",
  price: 0,
  level: "Beginner",
  totalHours: 1,
  totalLectures: 1,
}

export default function NewCoursePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues,
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onSubmit(_data: CourseFormValues) {
    setIsSubmitting(true)
    try {
      // Here you would typically make an API call to save the course
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulating API call
      toast({
        title: "Course created",
        description: "Your new course has been created successfully.",
      })
      router.push("/admin/dashboard/courses")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error creating the course. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Add New Course</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter course title" {...field} />
                </FormControl>
                <FormDescription>
                  Provide a clear and concise title for your course.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="mobile-development">Mobile Development</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose the most appropriate category for your course.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter course description"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Provide a detailed description of your course content and objectives.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Enter author name" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the name of the course instructor or author.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter course price"
                    {...field}
                    onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                  Set the price for your course in USD.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Level</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select course level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose the difficulty level of your course.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="totalHours"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Hours</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter total course hours"
                    {...field}
                    onChange={(e) => field.onChange(Number.parseInt(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                  Enter the total duration of the course in hours.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="totalLectures"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Lectures</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter total number of lectures"
                    {...field}
                    onChange={(e) => field.onChange(Number.parseInt(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                  Enter the total number of lectures in the course.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Course"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

