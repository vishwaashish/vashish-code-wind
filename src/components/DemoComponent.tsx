"use client";
import { cn } from "@/lib/utils";
import { Code2 } from "lucide-react";
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

export default function DemoComponent({
  directory,
  componentName,
  className,
  showCopy = true,
  children,
  ...props
}: {
  directory: string;
  componentName: string;
  className?: string;
  showCopy?: boolean;
  children?: ({ html }: { html: string }) => ReactNode;
}) {
  const { html, react, Component } = useDynamicComponent({
    directory,
    componentName,
  });

  const languageOptions = [
    { value: html, label: "Html" },
    { value: react, label: "React" },
  ].filter((a) => a.value);

  if (!Component) {
    return (
      <div className="flex h-full w-full animate-pulse items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      {!children && (
        <div className={cn("", className)}>
          <Component {...props} />
        </div>
      )}
      {showCopy && (
        <Dialog>
          <DialogTrigger asChild>
            <Code2
              role="button"
              className="absolute right-2 top-2 z-10 text-foreground transition-opacity"
              size={15}
            />
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
    </>
  );
}
