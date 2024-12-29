"use client";

import React, { Children, ReactNode, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface ComponentPreviewProps {
  children: ReactNode;
  className?: string;
  previewClassName?: string;
}
const ComponentPreview = ({
  children,
  className = "",
  previewClassName = "",
  ...props
}: ComponentPreviewProps) => {
  const { theme } = useTheme();
  const [themeBox, setThemeBox] = useState<string | undefined>("light");

  useEffect(() => {
    setThemeBox(theme);
  }, [theme]);

  const childArray = Children.toArray(children);
  const preview = childArray.length ? Children.toArray(children)[0] : null;
  const block = childArray.length ? Children.toArray(children)[1] : null;

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            {!!preview && (
              <TabsTrigger
                value="preview"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Preview
              </TabsTrigger>
            )}
            {!!block && (
              <TabsTrigger
                value="block"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Block
              </TabsTrigger>
            )}
          </TabsList>
          <TabsList className="rounded-none border-b bg-transparent">
            <button
              onClick={() =>
                setThemeBox((val) => (val === "light" ? "dark" : "light"))
              }
              className="bg-transparent transition-none text-sm aspect-square data-[state=active]:hi"
            >
              {themeBox === "light" ? (
                <Sun size={15} className="mx-auto" />
              ) : (
                <Moon size={12} className="mx-auto" />
              )}
            </button>
          </TabsList>
        </div>

        {!!preview && (
          <TabsContent value="preview">
            <div
              className={cn(
                "bg-background relative flex items-center justify-between border rounded-md overflow-hidden p-4 preview-code",
                themeBox === "light" ? "light" : "dark",
                previewClassName
              )}
            >
              {preview}
            </div>
          </TabsContent>
        )}

        {!!block && (
          <TabsContent
            value="block"
            className={cn(themeBox === "light" ? "light" : "dark")}
          >
            <div className="flex flex-col space-y-4">
              <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                {block}
              </div>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default ComponentPreview;
