import React, { Children, ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cn } from "@/lib/utils";

interface ComponentCodesProps {
  children: ReactNode;
  className?: string;
  tabs: string[];
  defaultValue?: string;

  //   code: string;
}
const ComponentCodes = ({
  tabs,
  children,
  defaultValue,
  className,
  ...props
}: ComponentCodesProps) => {



  if (!tabs.length) {
    return;
  }


  const defaultTab = defaultValue ?? tabs[0] 

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

export default ComponentCodes;
