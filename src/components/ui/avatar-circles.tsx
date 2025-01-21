"use client";

import React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <Link key={index} href={url.profileUrl}>
          <Image
            key={index}
            className="h-10 w-10 rounded-full bg-yellow-200"
            src={url.imageUrl}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </Link>
      ))}
      {(numPeople ?? 0) > 0 && (
        <Link
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary"
        >
          +{numPeople}
        </Link>
      )}
    </div>
  );
};

export default AvatarCircles;
