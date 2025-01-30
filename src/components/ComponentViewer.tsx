"use client";
import { cn, formatString } from "@/lib/utils";
import { FullscreenIcon, Moon, RotateCw, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { useEffect, useRef, useState } from "react";
import { useDynamicComponent } from "./hooks/component";
import { SyntaxHighlighter } from "./shiki";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Tooltip } from "./ui/tooltip";
import { Button } from "./ui/button";

type WindowSize = "laptop" | "tablet" | "mobile";
const ComponentViewer = ({
  componentName,
  component,
  directory,
  isComponent = false,
  previewClassName,
  hasTitle = true,
}: {
  componentName: string;
  component: string;
  directory: string;
  previewClassName: string;
  isComponent?: boolean;
  hasTitle?: boolean;
}) => {
  const { theme } = useTheme();
  const {
    isLoading,
    html,
    error,
    react,
    Component,
    fullScreen,
    title,
    reload,
  } = useDynamicComponent({
    directory,
    component,
    componentName,
  });

  const languageOptions = [
    { value: html, label: "html" },
    { value: react, label: "react" },
  ].filter((a) => a.value);

  const [themeBox, setThemeBox] = useState("light");
  const [device, setDevice] = useState<WindowSize>("laptop");
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

      if (event.data.type === `${component}-iframeHeight`) {
        const height = Number(event.data.height) || IMinHeight;
        setIframeHeight(height);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [component]);

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

  const handleReload = () => {
    setThemeBox(theme || "light");
    reload();
  };

  const handleDeviceSize = (device: WindowSize) => () => {
    setDevice(device);
  };

  const deviceWidth = (device: WindowSize) => {
    if (device === "mobile") {
      return "425px";
    }

    if (device === "tablet") {
      return "768px";
    }

    return "100%";
  };

  const url = `/preview?component=${component}&directory=${directory}&componentName=${componentName}`;
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
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="block"
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Block
          </TabsTrigger>

          {!hasTitle && <div className="ml-auto" />}

          {!!languageOptions.length && (
            <>
              {hasTitle && (
                <Separator orientation="vertical" className="h-auto py-2" />
              )}
              <Tooltip
                title={
                  languageOptions.length > 1 ? "Select language" : "Language"
                }
              >
                {languageOptions.length == 1 ? (
                  <Button variant={"text"} disabled className="!bg-transparent">
                    {formatString(languageOptions[0].label)}
                  </Button>
                ) : (
                  <select
                    className="relative mr-4 rounded-none border-b-2 border-b-transparent bg-transparent pl-4 pr-2 text-sm text-muted-foreground shadow-none outline-none transition-none"
                    value={selectedLanguage}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                  >
                    {languageOptions.map((item) => (
                      <option key={item.label} value={item.label}>
                        {formatString(item.label)}
                      </option>
                    ))}
                  </select>
                )}
              </Tooltip>
            </>
          )}
          {!isComponent && (
            <>
              <Separator orientation="vertical" className="h-auto py-2" />
              <Tooltip title="Toggle theme">
                <Button
                  variant={"text"}
                  size={"icon"}
                  className="cursor-pointer"
                  onClick={toggleTheme}
                >
                  {themeBox === "light" ? (
                    <Sun size={15} className="mx-auto" />
                  ) : (
                    <Moon size={15} className="mx-auto" />
                  )}
                </Button>
              </Tooltip>
            </>
          )}

          {!isComponent && (
            <div className="hidden items-center md:flex">
              <Separator orientation="vertical" className="h-auto py-2" />

              <Button
                variant={"text"}
                color={device === "laptop" ? "primary" : "default"}
                size={"icon"}
                className="cursor-pointer"
                onClick={handleDeviceSize("laptop")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-monitor size-4"
                >
                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                  <line x1="8" x2="16" y1="21" y2="21"></line>
                  <line x1="12" x2="12" y1="17" y2="21"></line>
                </svg>
              </Button>
              <Button
                variant={"text"}
                size={"icon"}
                color={device === "tablet" ? "primary" : "default"}
                className="w-auto cursor-pointer"
                onClick={handleDeviceSize("tablet")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-tablet size-4"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                  <line x1="12" x2="12.01" y1="18" y2="18"></line>
                </svg>
              </Button>
              <Button
                variant={"text"}
                size={"icon"}
                color={device === "mobile" ? "primary" : "default"}
                className="cursor-pointer"
                onClick={handleDeviceSize("mobile")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-smartphone size-4"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                  <path d="M12 18h.01"></path>
                </svg>
              </Button>
            </div>
          )}
          {
            <>
              <Separator orientation="vertical" className="h-auto py-2" />
              <Tooltip title="Refresh">
                <Button
                  variant={"text"}
                  size={"icon"}
                  className="cursor-pointer"
                  onClick={handleReload}
                >
                  <RotateCw size={15} />
                </Button>
              </Tooltip>
            </>
          }
          {!isComponent && (
            <>
              <Separator orientation="vertical" className="h-auto py-2" />
              <Tooltip title="Open in new tab">
                <Button
                  variant={"text"}
                  size={"icon"}
                  className="cursor-pointer"
                  asChild
                >
                  <Link
                    href={url}
                    target="_blank"
                    // className="data-[state=active]:hi relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none outline-none transition-none"
                  >
                    <FullscreenIcon size={15} />
                  </Link>
                </Button>
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
                {/* <div className="h-2 rounded bg-input"></div> */}
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
                  src={url}
                  className="mx-auto h-full w-[768px] rounded border-none shadow"
                  title="Component Preview"
                  style={{
                    height: `${iframeHeight}px`,
                    maxHeight: IMaxHeight,
                    width: deviceWidth(device),
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
