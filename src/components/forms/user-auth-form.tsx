"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement> & {
  mode: "signin" | "signup";
  routePath: string;
  showSignInContinues?: boolean;
};

export function UserAuthForm({
  className,
  mode = "signin",
  routePath,
  showSignInContinues = true,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState({
    fullName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (mode === "signup" && formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        setIsLoading(false);
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (mode === "signup") {
        toast({
          title: "Register",
          description: "Your account has been registered successfully.",
        });
      } else {
        toast({
          title: "Singin",
          description: "Your have logIn successfully.",
        });
      }

      if (routePath.length > 0) router.push(routePath);
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
      console.error("Error during authentication", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-6">
          {mode === "signup" && (
            <div className="grid grid-cols-2 gap-2 items-end">
              <div className="grid gap-1">
                <Label htmlFor="fullName" className="caption font-semibold">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Full Name"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
              <div className="grid gap-1">
                <Label
                  htmlFor="lastName"
                  className="sr-only caption font-semibold"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
            </div>
          )}

          {mode === "signup" && (
            <div className="grid gap-1">
              <Label htmlFor="username" className="caption font-semibold">
                Username
              </Label>
              <Input
                id="username"
                placeholder="Username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          )}

          <div className="grid gap-1">
            <Label htmlFor="email" className="caption font-semibold">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <div className={mode === "signup" ? "grid grid-cols-2 gap-2" : ""}>
            <div className="grid gap-1">
              <Label htmlFor="password" className="caption font-semibold">
                Password
              </Label>
              <Input
                id="password"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                disabled={isLoading}
              />
            </div>
            {mode === "signup" && (
              <div className="grid gap-1">
                <Label
                  htmlFor="confirmPassword"
                  className="caption font-semibold"
                >
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  disabled={isLoading}
                />
              </div>
            )}
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {mode === "signin" ? "Sign In with Email" : "Sign Up with Email"}
          </Button>
        </div>
      </form>
      {showSignInContinues && (
        <>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid gap-2">
            <Button variant="outline" type="button" disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.gitHub className="mr-2 h-4 w-4" />
              )}
              GitHub
            </Button>
            <Button variant="outline" type="button" disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="mr-2"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              )}
              Google
            </Button>
            <Button variant="outline" type="button" disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="mr-2"
                >
                  <linearGradient
                    id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                    x1="9.993"
                    x2="40.615"
                    y1="9.993"
                    y2="40.615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#2aa4f4"></stop>
                    <stop offset="1" stopColor="#007ad9"></stop>
                  </linearGradient>
                  <path
                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                  ></path>
                </svg>
              )}
              Facebook
            </Button>
          </div>
        </>
      )}

      {mode === "signup" && (
        <div className="text-xs text-muted-foreground text-center">
          By signing up, you agree to our{" "}
          <a href="/terms" className="text-primary underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-primary underline">
            Privacy Policy
          </a>
          .
        </div>
      )}
    </div>
  );
}
