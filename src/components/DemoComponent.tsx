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

// export const useComponent = ({
//   directory,
//   componentName,
// }: {
//   directory: string;
//   componentName: string;
// }) => {
//   // const singular = directory.slice(0, directory.length - 1);
//   // const fileData = await import(
//   //   `@/components/${directory}/${componentName}`
//   // ).catch(() => null);
//   // return fileData;
// };

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

            <TabbedContent tabs={["Html", "React"]}>
              <SyntaxHighlighter
                maxHeight="450px"
                code={html}
                language="html"
              />
              <SyntaxHighlighter
                maxHeight="450px"
                code={react}
                language="jsx"
              />
            </TabbedContent>
          </DialogContent>
        </Dialog>
      )}

      {!!children && children({ html })}
    </>
  );
}
