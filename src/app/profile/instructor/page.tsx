import { InstructorCard } from "@/components/instructor-card";
import { instructors } from "@/constants";
import React from "react";

export default function Instructor() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
      {instructors.map((instr) => (
        <div key={instr.id}>
          <InstructorCard {...instr} showRating={false} />
        </div>
      ))}
    </div>
  );
}
