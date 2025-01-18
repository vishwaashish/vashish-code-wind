import { cn } from "@/lib/utils";
import React, { forwardRef, LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required = false, children, ...rest }, ref) => {
    return (
      <label
        ref={ref}
        className={cn("text-sm", className)}
        aria-required={required}
        {...rest}
      >
        {children}
        {required && <span className="pl-0.5 text-destructive">*</span>}
      </label>
    );
  },
);

Label.displayName = "Label";

export default Label;
