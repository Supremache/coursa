"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { CheckCircle2, Loader2, Upload } from "lucide-react"
import Image from "next/image"
import { Member } from "@/types"

const memberFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." })
    .max(30, { message: "First name must not be longer than 30 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." })
    .max(30, { message: "Last name must not be longer than 30 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  role: z.enum(["admin", "instructor", "student", "banned"]),
  bio: z.string().max(160).min(4),
  joinDate: z.string(),
})

type MemberFormValues = z.infer<typeof memberFormSchema>

interface EditMemberModalProps {
  member: Member
  isOpen: boolean
  onClose: () => void
  onSave: (member: Member) => void
}

export function EditMemberModal({ member, isOpen, onClose, onSave }: EditMemberModalProps) {
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(member.avatar || null)
  const [isUploading, setIsUploading] = useState(false)

  const form = useForm<MemberFormValues>({
    resolver: zodResolver(memberFormSchema),
    defaultValues: {
      firstName: member.name.split(" ")[0],
      lastName: member.name.split(" ")[1] || "",
      email: member.email,
      role: member.role,
      bio: member.bio || "",
      joinDate: member.joinDate,
    },
  })

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = async (data: MemberFormValues) => {
    setIsUploading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Handle image upload if imageFile exists
      let avatarUrl = member.avatar
      if (imageFile) {
        // Here you would typically upload the image file to your server
        console.log("Uploading image:", imageFile)
        avatarUrl = URL.createObjectURL(imageFile) // This is just for demonstration
      }

      const updatedMember: Member = {
        ...member,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        role: data.role,
        bio: data.bio,
        joinDate: data.joinDate,
        avatar: avatarUrl,
      }

      onSave(updatedMember)
      onClose()
    } catch (error) {
      console.error("Error updating member:", error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px] p-4 sm:p-6 md:p-8  h-full overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Edit Member</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24">
                  <div className="h-24 w-24 rounded-full overflow-hidden bg-slate-100">
                    {imagePreview ? (
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Profile preview"
                        fill
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-slate-400">
                        <Upload className="h-8 w-8" />
                      </div>
                    )}
                  </div>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Profile Image</h4>
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input {...field} />
                      <CheckCircle2 className="absolute right-3 top-2.5 h-5 w-5 text-green-500" />
                    </div>
                  </FormControl>
                  <FormDescription>Member&apos;s email address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="instructor">Instructor</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="banned">Banned</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us a little bit about the member" className="resize-none" {...field} />
                  </FormControl>
                  <FormDescription>A short bio about the member. Limited to 160 characters.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="joinDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Join Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isUploading} className="w-full sm:w-auto">
              {isUploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

