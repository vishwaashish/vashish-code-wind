"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { lazy, ReactNode, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Moon, Sun } from "lucide-react";
const CodePreview = lazy(() => import("./CodePreview"));
const ToggleCodePreview = ({
  children,
  className,
  code,
  lang,
}: {
  children: ReactNode;
  className: string;
  code: string;
  lang?: string;
}) => {
  const { theme } = useTheme();
  const [themeBox, setThemeBox] = useState<string | undefined>("light");

  useEffect(() => {
    setThemeBox(theme);
  }, [theme]);

  return (
    <Tabs defaultValue="preview" className="w-full preview-code-container">
      <div className="flex gap-4 justify-between">
        <TabsList className="rounded-b-none p-0 bg-transparent h-7 preview-code-tabs">
          <TabsTrigger
            className="data-[state=active]:shadow-none data-[state=active]:border data-[state=active]:border-b-0 transition-none rounded-b-none"
            value="preview"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:shadow-none data-[state=active]:border data-[state=active]:border-b-0 transition-none rounded-b-none"
            value="code"
          >
            Code
          </TabsTrigger>
        </TabsList>
        <TabsList className="rounded-b-none p-0 bg-transparent h-7 preview-code-tabs">
          <button
            onClick={() =>
              setThemeBox((val) => (val === "light" ? "dark" : "light"))
            }
            className="border :hover:bg-muted rounded-lg border-b-0 transition-none rounded-b-none text-sm h-full w-full aspect-square"
          >
            {themeBox === "light" ? (
              <Sun size={15} className="mx-auto" />
            ) : (
              <Moon size={12} className="mx-auto" />
            )}
          </button>
        </TabsList>
        {
          // <Button
          //   variant="ghost"
          //   onClick={() =>
          //     setThemeBox((val) => (val === "light" ? "dark" : "light"))
          //   }
          // >
          //   {themeBox === "light" ? <Sun /> : <Moon />}
          // </Button>
        }
      </div>

      <TabsContent
        value="preview"
        className={"border rounded-lg overflow-hidden rounded-t-none mt-0"}
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
      <TabsContent
        value="code"
        className={"rounded-lg overflow-hidden rounded-t-none mt-0"}
      >
        <CodePreview code={code} language={lang} />
      </TabsContent>
    </Tabs>
  );
};

export default ToggleCodePreview;