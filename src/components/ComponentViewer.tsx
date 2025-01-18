"use client";
import { cn, formatString } from "@/lib/utils";
import { FullscreenIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { useEffect, useRef, useState } from "react";
import { useDynamicComponent } from "./hooks/component";
import { SyntaxHighlighter } from "./shiki";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Tooltip } from "./ui/tooltip";
const ComponentViewer = ({
  componentName,
  directory,
  isComponent = false,
  previewClassName,
  hasTitle = true,
}: {
  componentName: string;
  directory: string;
  previewClassName: string;
  isComponent?: boolean;
  hasTitle?: boolean;
}) => {
  const { theme } = useTheme();
  const { isLoading, html, error, react, Component, fullScreen, title } =
    useDynamicComponent({
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

  const IMinHeight = 300;
  const IMaxHeight = fullScreen ? "auto" : 500;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState<number>(IMinHeight); // Default height

  useEffect(() => {
    const sendThemeToIframe = () => {
      iframeRef.current?.contentWindow?.postMessage(
        { type: "updateTheme", theme: themeBox },
        "*",
      );
    };

    sendThemeToIframe();
  }, [themeBox]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) {
        console.warn("Received message from unauthorized origin");
        return;
      }

      if (event.data.type === `${componentName}-iframeHeight`) {
        const height = Number(event.data.height) || IMinHeight;
        setIframeHeight(height);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [componentName]);

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
      <div className="pb-3">
        {hasTitle && (
          <div className="block pb-4 lg:hidden">
            <p className="text-lg text-foreground">{title}</p>
          </div>
        )}
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          {hasTitle && (
            <div className="hidden sm:mr-auto lg:block">
              <p className="m-auto pb-3 pt-2 text-foreground">{title}</p>
            </div>
          )}
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

          {!hasTitle && <div className="ml-auto" />}

          {!!languageOptions.length && (
            <>
              {hasTitle && (
                <Separator orientation="vertical" className="h-auto py-2" />
              )}
              <Tooltip title="Select language">
                <select
                  className="relative mr-4 rounded-none border-b-2 border-b-transparent bg-transparent pb-3 pl-4 pr-2 pt-2 text-sm font-semibold text-muted-foreground shadow-none outline-none transition-none"
                  value={selectedLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                >
                  {languageOptions.map((item) => (
                    <option key={item.label} value={item.label}>
                      {formatString(item.label)}
                    </option>
                  ))}
                </select>
              </Tooltip>
            </>
          )}
          {!isComponent && (
            <>
              <Separator orientation="vertical" className="h-auto py-2" />
              <Tooltip title="Toggle theme">
                <button
                  onClick={toggleTheme}
                  className="data-[state=active]:hi relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none outline-none transition-none"
                >
                  {themeBox === "light" ? (
                    <Sun size={15} className="mx-auto" />
                  ) : (
                    <Moon size={12} className="mx-auto" />
                  )}
                </button>
              </Tooltip>
            </>
          )}
          {!isComponent && (
            <>
              <Separator orientation="vertical" className="h-auto py-2" />
              <Tooltip title="Open in new tab">
                <Link
                  href={`/preview?component=${componentName}&directory=${directory}`}
                  target="_blank"
                  className="data-[state=active]:hi relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none outline-none transition-none"
                >
                  <FullscreenIcon size={15} />
                </Link>
              </Tooltip>
            </>
          )}
        </TabsList>
      </div>

      <TabsContent value="preview">
        <div
          className={cn(
            "preview-code relative overflow-hidden rounded-md border bg-background p-1 md:p-0",
            // themeBox === "light" ? "light" : "dark",
          )}
          style={{
            colorScheme: themeBox,
          }}
        >
          {isLoading ? (
            <div className="flex animate-pulse items-center gap-4 space-y-3 p-1 md:p-4">
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
            <div className={cn("", previewClassName)}>
              {isComponent ? (
                <Component />
              ) : (
                <iframe
                  ref={iframeRef}
                  src={`/preview?component=${componentName}&directory=${directory}`}
                  className="h-full w-full rounded border-none"
                  title="Component Preview"
                  style={{
                    height: `${iframeHeight}px`,
                    maxHeight: IMaxHeight,
                    transition: "height 0.3s ease-in-out",
                  }}
                />
              )}
            </div>
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
                The code for this component is not yet available.
              </p>
            </div>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ComponentViewer;
