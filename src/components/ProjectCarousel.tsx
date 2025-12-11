"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-0 bottom-0 z-20 hidden md:flex items-center justify-center px-2 bg-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 text-white"
        aria-label="Scroll Left"
      >
        <ChevronLeft size={32} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar gap-4 px-4 md:px-8 pb-12 pt-8 snap-x snap-mandatory scroll-smooth"
      >
        {projects.map((project) => (
          <div key={project.id} className="snap-center shrink-0">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-0 bottom-0 z-20 hidden md:flex items-center justify-center px-2 bg-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 text-white"
        aria-label="Scroll Right"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
