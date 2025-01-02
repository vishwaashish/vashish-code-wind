"use client";

import React, { Children, ReactNode, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * A flexible panel component for displaying both preview and code sections in a tabbed interface.
 *
 * @component
 * @param {PreviewAndCodePanelProps} props - Props for configuring the preview and code panel.
 * @param {ReactNode} props.children - Content for both preview and code sections. The first child is used for the preview, and the second child for the code block.
 * @param {string} [props.className] - Additional custom class names for styling the outer container.
 * @param {string} [props.previewClassName] - Additional class names for styling the preview section.
 *
 * @returns {JSX.Element} - A tabbed panel interface with options to switch between preview and code views.
 *
 * @example
 * <PreviewAndCodePanel>
 *   <div>Preview Content</div>
 *   <pre>
 *     {`
 *       <div>Preview Content</div>
 *     `}
 *   </pre>
 * </PreviewAndCodePanel>
 *
 * @description
 * - **Preview Tab:** Displays a live preview of the provided content.
 * - **Code Tab:** Shows the code representation of the component.
 * - **Theme Toggle:** Allows switching between light and dark themes.
 *
 * @note
 * - Ensure that `children` includes exactly two elements: one for the preview and one for the code block.
 * - Theme toggling is handled internally and updates the appearance of both tabs dynamically.
 */

interface PreviewAndCodePanelProps {
  children: ReactNode;
  className?: string;
  previewClassName?: string;
}
const PreviewAndCodePanel = ({
  children,
  className = "",
  previewClassName = "",
  ...props
}: PreviewAndCodePanelProps) => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("");

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const childArray = Children.toArray(children);
  const previewContent = childArray[0] || null;
  const codeContent = childArray[1] || null;

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            {!!previewContent && (
              <TabsTrigger
                value="preview"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Preview
              </TabsTrigger>
            )}
            {!!codeContent && (
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
              onClick={toggleTheme}
              className="data-[state=active]:hi aspect-square bg-transparent text-sm transition-none"
            >
              {currentTheme === "light" ? (
                <Sun size={15} className="mx-auto" />
              ) : (
                <Moon size={12} className="mx-auto" />
              )}
            </button>
          </TabsList>
        </div>

        {!!previewContent && (
          <TabsContent value="preview">
            <div
              className={cn(
                "preview-code relative rounded-md border bg-background p-4",
                currentTheme === "light" ? "light" : "dark",
                previewClassName,
              )}
            >
              {previewContent}
            </div>
          </TabsContent>
        )}

        {!!codeContent && (
          <TabsContent
            value="block"
            className={cn(currentTheme === "light" ? "light" : "dark")}
          >
            <div className="flex flex-col space-y-4">
              <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:overflow-auto">
                {codeContent}
              </div>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default PreviewAndCodePanel;
