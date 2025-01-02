"use client";
import { cn, formatString } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { useDynamicComponent } from "./hooks/component";
import { SyntaxHighlighter } from "./shiki";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
const ComponentViewer = ({
  componentName,
  directory,
}: {
  componentName: string;
  directory: string;
}) => {
  const { theme } = useTheme();
  const { isLoading, html, error, react, Component } = useDynamicComponent({
    directory,
    componentName,
  });

  const languageOptions = [
    { value: html, label: "html" },
    { value: react, label: "react" },
  ].filter((a) => a.value);

  const [themeBox, setThemeBox] = useState("light");
  const [selectedLanguage, setSelectedLanguage] = useQueryState("lang", {
    defaultValue: languageOptions[1]?.label || "react",
  });
  const [codeSnippet, setCodeSnippet] = useState<string>("");

  useEffect(() => {
    if (selectedLanguage === "html") {
      setCodeSnippet(html);
    } else if (selectedLanguage === "react") {
      setCodeSnippet(react);
    }
  }, [selectedLanguage, html, react]);

  useEffect(() => {
    setThemeBox(theme || "light");
  }, [theme]);

  const toggleTheme = () => {
    setThemeBox((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    if (value === "html") setCodeSnippet(html);
    if (value === "react") setCodeSnippet(react);
  };

  if (!!error) {
    return;
  }

  return (
    <Tabs defaultValue="preview" className="relative mr-auto w-full">
      <div className="flex items-center justify-between pb-3">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="preview"
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="block"
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Block
          </TabsTrigger>
        </TabsList>
        <TabsList className="flex gap-3 rounded-none border-b bg-transparent">
          <select
            className="text-sm outline-none"
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            {languageOptions.map((item) => (
              <option key={item.label} value={item.label}>
                {formatString(item.label)}
              </option>
            ))}
          </select>
          <button
            onClick={toggleTheme}
            className="data-[state=active]:hi aspect-square bg-transparent text-sm transition-none"
          >
            {themeBox === "light" ? (
              <Sun size={15} className="mx-auto" />
            ) : (
              <Moon size={12} className="mx-auto" />
            )}
          </button>
        </TabsList>
      </div>

      <TabsContent value="preview">
        <div
          className={cn(
            "preview-code relative rounded-md border bg-background p-4",
            themeBox === "light" ? "light" : "dark",
          )}
          style={{
            colorScheme: themeBox,
          }}
        >
          {isLoading ? (
            <div className="flex animate-pulse items-center gap-4 space-y-3">
              <div className="h-20 w-20 rounded-full bg-input"></div>
              <div className="!m-0 flex-1 space-y-3">
                <div className="h-2 rounded bg-input"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-input"></div>
                    <div className="col-span-1 h-2 rounded bg-input"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 h-2 rounded bg-input"></div>
                    <div className="col-span-2 h-2 rounded bg-input"></div>
                  </div>
                  <div className="h-2 rounded bg-input"></div>
                </div>
              </div>
            </div>
          ) : (
            <Component />
          )}
        </div>
      </TabsContent>

      <TabsContent
        value="block"
        className={cn(themeBox === "light" ? "light" : "dark")}
      >
        <div>
          <SyntaxHighlighter
            code={codeSnippet}
            loading={isLoading}
            maxHeight="450px"
          />
          {!isLoading && !codeSnippet && (
            <div className="preview-code rounded-lg border p-4">
              <h1 className="font-semibold text-foreground">
                🚧 Coming Soon 🚧
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                The code preview for this component is not yet available.
              </p>
            </div>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ComponentViewer;
