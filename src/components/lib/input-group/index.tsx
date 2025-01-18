import { cn } from "@/lib/utils";
import React, { Children, cloneElement, forwardRef, ReactElement } from "react";

interface InputGroupProps {
  children?: React.ReactNode;
}

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ children }, ref) => {
    return (
      <div className="flex w-full items-stretch" ref={ref}>
        {Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const childElement = child as ReactElement<{ className?: string }>;
            return cloneElement(childElement, {
              className: cn(
                childElement.props.className,
                childElement.props.className?.includes("group-addon") &&
                  "first:border-e-0 last:border-s-0",
                "rounded-none first:rounded-l-md last:rounded-r-md not-last:border-r-0 focus-visible:border focus-visible:z-[1]",
              ),
            });
          }
          return child;
        })}
      </div>
    );
  },
);

InputGroup.displayName = "InputGroup";

export default InputGroup;
