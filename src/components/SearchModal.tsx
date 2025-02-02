"use client";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn, formatString, groupBy } from "@/lib/utils";
import { NavigationModel } from "@/types/common.type";
import { Circle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { navigation } from "../../config";

export default function Search({ className }: { className?: string }) {
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
        <button
          className={cn(
            "[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 relative inline-flex w-full items-center justify-start gap-2 whitespace-nowrap rounded-[0.5rem] border border-input px-4 py-2 text-sm font-normal text-muted-foreground shadow-none ring-primary transition-colors hover:ring-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:pr-12",
            className,
          )}
        >
          <span className="hidden lg:inline-flex">Quick Search...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <div className="absolute right-0 hidden h-full items-center p-[3%] md:flex">
            <kbd className="font-mono pointer-events-none flex aspect-square h-full select-none items-center gap-1 rounded border bg-muted p-1 text-[10px] font-bold">
              <span className="text-xs">⌘</span>J
            </kbd>
          </div>
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
                    className="cursor-pointer"
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
