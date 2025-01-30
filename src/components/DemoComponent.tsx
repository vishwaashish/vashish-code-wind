"use client";
import { cn } from "@/lib/utils";
import { Code, Code2 } from "lucide-react";
import { ReactNode } from "react";
import { useDynamicComponent } from "./hooks/component";
import { SyntaxHighlighter } from "./shiki";
import TabbedContent from "./TabbedContent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function DemoComponent({
  directory,
  component,
  componentName,
  className,
  showCopy = true,
  copyClassName = "",
  children,
  ...props
}: {
  directory: string;
  component: string;
  componentName: string;
  className?: string;
  showCopy?: boolean;
  copyClassName?: string;
  children?: ({ html }: { html: string }) => ReactNode;
}) {
  const { html, react, Component, isLoading } = useDynamicComponent({
    directory,
    component,
    componentName,
  });

  const languageOptions = [
    { value: html, label: "Html" },
    { value: react, label: "React" },
  ].filter((a) => a.value);

  if (isLoading) {
    return (
      <div className="flex min-h-40 w-full animate-pulse items-center justify-center">
        {/* <div className="spinner"></div> */}
      </div>
    );
  }

  return (
    <div className="">
      {!children && (
        <div className={cn("", className)}>
          <Component {...props} />
        </div>
      )}
      {showCopy && (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className={cn(
                "absolute right-2 top-2 z-10 transition-opacity",
                copyClassName,
              )}
            >
              <Code
                size={15}
              />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl gap-0">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Code2 />
                Source code
              </DialogTitle>
            </DialogHeader>

            {!languageOptions.length && (
              <div className="preview-code mt-6 rounded-lg border p-4">
                <h1 className="font-semibold text-foreground">
                  🚧 Coming Soon 🚧
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  The code for this component is not yet available.
                </p>
              </div>
            )}

            <TabbedContent tabs={languageOptions.map((item) => item.label)}>
              {languageOptions.map((item) => (
                <SyntaxHighlighter
                  key={item.label}
                  maxHeight="450px"
                  code={item.value}
                  language={
                    item.label.toLowerCase() === "html" ? "html" : "tsx"
                  }
                />
              ))}
              {html ? (
                <SyntaxHighlighter
                  maxHeight="450px"
                  code={html}
                  language="html"
                />
              ) : (
                <div className="preview-code rounded-lg border p-4">
                  <h1 className="font-semibold text-foreground">
                    🚧 Coming Soon 🚧
                  </h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The code for this component is not yet available.
                  </p>
                </div>
              )}
              {react ? (
                <SyntaxHighlighter
                  maxHeight="450px"
                  code={react}
                  language="jsx"
                />
              ) : (
                <div className="preview-code rounded-lg border p-4">
                  <h1 className="font-semibold text-foreground">
                    🚧 Coming Soon 🚧
                  </h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The code for this component is not yet available.
                  </p>
                </div>
              )}
            </TabbedContent>
          </DialogContent>
        </Dialog>
      )}

      {!!children && children({ html })}
    </div>
  );
}
