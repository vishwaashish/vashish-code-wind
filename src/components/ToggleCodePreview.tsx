"use client";
import { cn } from "@/lib/utils";
import { lazy, ReactNode, useEffect, useState } from "react";
// import CodePreview from "./CodePreview";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
const CodePreview = lazy(() => import("./CodePreview"));
const ToggleCodePreview = ({
  children,
  className,
  code,
}: {
  children: ReactNode;
  className: string;
  code: string;
}) => {
  const { theme } = useTheme();
  const [themeBox, setThemeBox] = useState<string | undefined>(theme);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Tabs defaultValue="preview" className="w-full">
      <div className="flex gap-4 justify-between">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        {mounted && (
          <Button
            variant="ghost"
            onClick={() =>
              setThemeBox((val) => (val === "light" ? "dark" : "light"))
            }
          >
            {themeBox === "light" ? <Sun /> : <Moon />}
          </Button>
        )}
      </div>

      <TabsContent
        value="preview"
        className={cn("border rounded-lg overflow-hidden ")}
      >
        <div
          className={cn(
            " p-5 preview-code",
            themeBox === "light" ? "light" : "dark",
            className
          )}
        >
          {children}
        </div>
      </TabsContent>
      <TabsContent value="code" className="border rounded-lg overflow-hidden">
        <CodePreview code={code} />
      </TabsContent>
    </Tabs>
  );
};

export default ToggleCodePreview;
