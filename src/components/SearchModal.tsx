"use client";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { formatString, groupBy } from "@/lib/utils";
import { NavigationModel } from "@/types/common.type";
import { Circle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { navigation } from "../../config";

export default function Search() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const groupByNavigation = groupBy(navigation, "heading");

  const onLinkClick = (item: NavigationModel) => () => {
    router.push(item.url);
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <>
      <div className="" onClick={() => setOpen(true)}>
        <button className="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input hover:ring-1 ring-primary px-4 py-2 relative w-full justify-start rounded-[0.5rem]  text-sm font-normal text-muted-foreground shadow-none sm:pr-12 ">
          <span className="hidden lg:inline-flex">Quick Search...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.45rem] hidden select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-bold opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
      </div>
      <CommandDialog open={open} title="Search Dialog" onOpenChange={setOpen}>
        <CommandInput
          className="h-15"
          placeholder="Type a command or search..."
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groupByNavigation).map(([key, value], index) => (
            <Fragment key={key + "-" + index}>
              <CommandGroup
                heading={formatString(key === "undefined" ? "Links" : key)}
              >
                {value.map((item, index) => (
                  <CommandItem
                    key={item.slug + "-" + index}
                    onSelect={onLinkClick(item)}
                  >
                    <Circle />
                    <span>{item.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
