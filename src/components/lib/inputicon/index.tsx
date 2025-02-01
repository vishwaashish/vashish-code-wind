import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef, memo, useRef } from "react";

const inputIconVariants = cva(
  "absolute h-full py-1 flex items-center text-muted-foreground",
  {
    variants: {
      position: {
        left: "left-2",
        right: "right-2",
      },
    },
    defaultVariants: {
      position: "right",
    },
  },
);

interface InputIconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof inputIconVariants> {
  children?: React.ReactNode;
}

const InputIcon = memo(
  forwardRef<HTMLSpanElement, InputIconProps>(
    ({ className, position = "right", children, ...rest }, ref) => {
      const elementRef = useRef<HTMLSpanElement | null>(null);

      return (
        <span
          ref={(node) => {
            elementRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
          className={cn(inputIconVariants({ position }), className)}
          {...rest}
        >
          {children}
        </span>
      );
    },
  ),
);

InputIcon.displayName = "InputIcon";

export { InputIcon };
