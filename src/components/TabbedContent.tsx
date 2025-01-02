import React, { Children, ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cn } from "@/lib/utils";

/**
 * A flexible and reusable component for displaying content in a tabbed interface.
 *
 * @component
 * @param {TabbedContentProps} props - The props for configuring the tabbed interface.
 * @param {string[]} props.tabs - An array of tab labels to define the tabs.
 * @param {ReactNode} props.children - The content corresponding to each tab, in the same order as `tabs`.
 * @param {string} [props.defaultValue] - The default active tab. Defaults to the first tab if not specified.
 * @param {string} [props.className] - Additional custom class names for styling the outer container.
 *
 * @returns {JSX.Element | null} - A tabbed interface displaying content corresponding to the selected tab.
 *
 * @example
 * <TabbedContent tabs={['Preview', 'Code']}>
 *   <div>Preview Content</div>
 *   <pre>Code Content</pre>
 * </TabbedContent>
 *
 * @note
 * - Ensure the `children` prop contains content in the same order as the `tabs` array.
 * - If no `defaultValue` is provided, the first tab will be selected by default.
 */

interface TabbedContentProps {
  children: ReactNode;
  className?: string;
  tabs: string[];
  defaultValue?: string;

  //   code: string;
}
const TabbedContent = ({
  tabs,
  children,
  defaultValue,
  className,
  ...props
}: TabbedContentProps) => {
  if (!tabs.length) {
    return;
  }

  const defaultTab = defaultValue ?? tabs[0];

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue={defaultTab} className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            {tabs.map((item) => (
              <TabsTrigger
                key={item}
                value={item}
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Children.map(children, (child, index) => (
          <TabsContent value={tabs[index]} key={"tabs-" + index}>
            <div className="flex flex-col space-y-4">
              <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:overflow-auto">
                {child}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TabbedContent;
