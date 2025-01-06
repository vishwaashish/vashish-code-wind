// components/TableOfContents.tsx
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ className }: { className?: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  const [activeId, setActiveId] = useState<string>("");

  const levels: Record<number, string> = {
    1: "ml-0",
    2: "ml-4",
    3: "ml-8",
    4: "ml-12",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-56px 0px -80% 0px", // Adjust for header height
        threshold: 0.1, // Trigger when 10% of the heading is visible
      },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2, h3, h4, h5, h6"),
    );

    const parsedHeadings = headingElements.map((heading) => ({
      id:
        heading.id ||
        heading.textContent?.toLowerCase().replace(/\s+/g, "-") ||
        "",
      text: heading.textContent || "",
      level: Number(heading.tagName.charAt(1)),
    }));

    setHeadings(parsedHeadings);
  }, []);

  if (!headings.length) {
    return;
  }
  return (
    <div className={cn("block", className)}>
      <nav className={"sticky top-[56px] py-4 lg:py-6"}>
        {!!headings.length && (
          <>
            <p className="mb-3 text-sm font-semibold">On this Page</p>
            <ul className="space-y-3 text-sm">
              {headings.map((heading) => {
                const marginLeft = levels[heading.level] || "ml-0";
                return (
                  <li key={heading.id} className={marginLeft}>
                    <Link
                      href={`#${heading.id}`}
                      className={`hover:text-primary ${
                        activeId === heading.id
                          ? "font-bold text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {heading.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </nav>
    </div>
  );
}
