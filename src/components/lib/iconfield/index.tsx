import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { Children, cloneElement, isValidElement, useRef } from "react";

const iconFieldVariants = cva("relative", {
  variants: {
    position: {
      left: "p-icon-field-left",
      right: "p-icon-field-right",
    },
  },
  defaultVariants: {
    position: "right",
  },
});

interface IconFieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconFieldVariants> {
  children?: React.ReactNode;
}

const IconField = React.memo(
  React.forwardRef<HTMLDivElement, IconFieldProps>(
    (
      { className, position = "right", children, ...rest },
      ref,
    ) => {
      const elementRef = useRef<HTMLDivElement | null>(null);

      return (
        <div
          ref={(node) => {
            elementRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
          className={cn(
            iconFieldVariants({ position: position }),
            className,
          )}
          {...rest}
        >
          {Children.map(children, (child) => {
            if (isValidElement(child) && typeof child.type !== "string") {
              return cloneElement(
                child as React.ReactElement<
                  VariantProps<typeof iconFieldVariants>
                >,
                {
                  position: position,
                },
              );
            }
            return child;
          })}
        </div>
      );
    },
  ),
);

IconField.displayName = "IconField";

export { IconField };
