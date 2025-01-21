"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastAction } from "../ui/toast";

export function NewsletterForm() {
  const { toast } = useToast();

  const FormSchema = z.object({
    email: z
      .string()
      .email({ message: "Please enter a valid email address." })
      .nonempty({ message: "Email is required." }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form submitted with:", data);
    toast({
      title: "Subscription Successful! 🎉",
      description: `You've successfully subscribed with email: ${data.email}`,
      action: (
        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
      ),
    });
    form.reset();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          console.log("Validation errors:", errors);
        })}
        className="container max-w-xl order-1"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="space-y-2">
                  <h4 className="h4 leading-tight font-bold">
                    Subscribe to our Newsletter!
                  </h4>
                  <p className="body-2 leading-tight text-muted-foreground">
                    Get the latest updates on new courses, features, and special
                    offers delivered right to your inbox.
                  </p>
                </div>
              </FormLabel>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4">
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 body-1 input-field bg-background"
                  />
                </FormControl>
                <Button type="submit" className="flex-shrink-0">
                  Subscribe
                </Button>
              </div>
              <FormDescription>
                We&apos;ll never share your email with anyone else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
