// components/TableOfContents.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  const [activeId, setActiveId] = useState<string>("");

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
      }
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
      document.querySelectorAll("h2, h3, h4, h5, h6")
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

  return (
    <nav className="w-full p-6 lg:py-8 hidden lg:block sticky top-[56px]">
      {headings.length && (
        <>
          <p className="text-lg font-bold mb-2 h4">On this Page</p>
          <ul className="space-y-3 text-sm">
            {headings.map((heading) => (
              <li key={heading.id} className={`ml-${(heading.level - 1) * 4}`}>
                <Link
                  href={`#${heading.id}`}
                  className={`hover:text-primary ${
                    activeId === heading.id
                      ? "text-primary font-bold"
                      : "text-muted-foreground"
                  }`}
                >
                  {heading.text}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}
