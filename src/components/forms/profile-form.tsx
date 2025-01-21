"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle2, Loader2, Upload } from "lucide-react";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Image from "next/image";

const profileFormSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters.",
    })
    .max(30, {
      message: "First name must not be longer than 30 characters.",
    }),
  lastName: z
    .string()
    .min(2, {
      message: "Last name must be at least 2 characters.",
    })
    .max(30, {
      message: "Last name must not be longer than 30 characters.",
    }),
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please enter your email.",
    })
    .email(),
  bio: z.string().max(160).min(4),
  socials: z.object({
    twitter: z.string().url().optional(),
    facebook: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    instagram: z.string().url().optional(),
  }),
  customUrls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  bio: "",
  socials: {
    twitter: "",
    facebook: "",
    linkedin: "",
    github: "",
    instagram: "",
  },
  customUrls: [],
};

const socialIcons = {
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

export function ProfileForm() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const { fields, append } = useFieldArray({
    name: "customUrls",
    control: form.control,
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onSubmit(data: ProfileFormValues) {
    setIsUploading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle image upload if imageFile exists
      if (imageFile) {
        // Here you would typically upload the image file to your server
        console.log('Uploading image:', imageFile);
      }

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    } catch (error: unknown) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  }

  return (
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
              <p className="text-sm text-muted-foreground">
                Click to upload or drag and drop
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
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

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute inset-1.5 text-muted-foreground -z-10">
                      @
                    </span>
                    <Input placeholder="username" className="pl-7" {...field} />
                  </div>
                </FormControl>
                <FormDescription>
                  This is your public username. You can only change this once
                  every 30 days.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

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
                <FormDescription>Your verified email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Write a short bio about yourself. You can @mention other users.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Social Links</h3>
          {Object.entries(socialIcons).map(([key, Icon]) => (
            <FormField
              key={key}
              control={form.control}
              name={`socials.${key as keyof typeof socialIcons}`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder={`${
                          key.charAt(0).toUpperCase() + key.slice(1)
                        } URL`}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Additional Links</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => append({ value: "" })}
            >
              Add URL
            </Button>
          </div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`customUrls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <Button type="submit" disabled={isUploading}>
          {isUploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Update profile
        </Button>
      </form>
    </Form>
  );
}
