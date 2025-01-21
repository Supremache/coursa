import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/forms/user-auth-form";

export default function Login() {
  return (
    <>
      <div className="container relative h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Register
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
          <Image
            src="/images/login.png"
            fill
            alt="Authentication"
            className="h-full w-full object-cover"
          />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="body-2">
                &ldquo;This platform has saved me countless hours of effort and
                has helped me acquire new skills and knowledge faster than ever
                before, empowering me to achieve my learning goals with
                ease.&rdquo;
              </p>
              <footer className="caption">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign in to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to sign in your account
              </p>
            </div>
            <UserAuthForm mode={"signin"} routePath={"/"} />
          </div>
        </div>
      </div>
    </>
  );
}
