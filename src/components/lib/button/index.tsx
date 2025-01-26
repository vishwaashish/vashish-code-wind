import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer select-none flex-wrap items-center justify-center text-center leading-[1em] gap-2 font-medium no-underline duration-[0.2s] ease-out transition-[color,background-color,border-color,opacity,box-shadow,transform] shadow border-transparent border-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:hidden  active:scale-95 disabled:cursor-not-allowed disabled:scale-100 disabled:bg-muted disabled:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        contained: "bg-background text-foreground hover:bg-foreground/5",
        outlined:
          "border border-border shadow-none text-foreground hover:bg-foreground/5",
        ghost:
          "text-foreground shadow-none hover:bg-accent hover:text-foreground",
        text: "shadow-none cursor-auto",
        link: "shadow-none underline-offset-4 hover:underline",
      },
      color: {
        default: "focus-visible:outline-foreground",
        primary: "focus-visible:outline-primary",
        success: "focus-visible:outline-success",
        destructive: "focus-visible:outline-destructive",
      },
      size: {
        tiny: "h-5 px-2 py-0 text-xs [&_svg]:size-3 gap-1",
        sm: "h-7 px-3 text-xs [&_svg]:size-3 gap-1.5",
        md: "h-9 px-4 text-sm [&_svg]:size-4 ",
        lg: "h-10 px-8 text-lg [&_svg]:size-5",
        icon: "h-9 w-9",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "contained",
      size: "md",
      color: "default",
      rounded: "lg",
    },
    compoundVariants: [
      // Contained
      {
        variant: "contained",
        color: "primary",
        className: "bg-primary text-primary-foreground hover:bg-primary/80",
      },
      {
        variant: "contained",
        color: "destructive",
        className:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80",
      },
      {
        variant: "contained",
        color: "success",
        className: "bg-success text-success-foreground hover:bg-success/80",
      },

      // Outlined
      {
        variant: "outlined",
        color: "primary",
        className:
          "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      },
      {
        variant: "outlined",
        color: "destructive",
        className:
          "border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground",
      },
      {
        variant: "outlined",
        color: "success",
        className:
          "border-success text-success hover:bg-success hover:text-success-foreground",
      },

      // Ghost
      {
        variant: "ghost",
        color: "primary",
        className:
          "text-primary hover:bg-primary hover:text-primary-foreground",
      },
      {
        variant: "ghost",
        color: "destructive",
        className:
          "text-destructive hover:bg-destructive hover:text-destructive-foreground",
      },
      {
        variant: "ghost",
        color: "success",
        className:
          "text-success hover:bg-success hover:text-success-foreground",
      },

      // Text
      {
        variant: "text",
        color: "primary",
        className: "text-primary",
      },
      {
        variant: "text",
        color: "destructive",
        className: "text-destructive",
      },
      {
        variant: "text",
        color: "success",
        className: "text-success",
      },

      // Link
      {
        variant: "link",
        color: "primary",
        className: "text-primary underline-offset-4 hover:underline",
      },
      {
        variant: "link",
        color: "destructive",
        className: "text-destructive underline-offset-4 hover:underline",
      },
      {
        variant: "link",
        color: "success",
        className: "text-success underline-offset-4 hover:underline ",
      },
    ],
  },
);

const defaultLoadingIndicator = (
  <svg
    className="animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    ></path>
  </svg>
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disableAnimation?: boolean;
  noPadding?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  loadingPosition?: "start" | "end";
  loadingIndicator?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant,
      disableAnimation,
      noPadding,
      size,
      color,
      asChild = false,
      startIcon,
      endIcon,
      disabled,
      rounded,
      loading = false,
      loadingPosition = "start",
      loadingIndicator = defaultLoadingIndicator,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const renderStartIcon =
      loading && loadingPosition === "start"
        ? loadingIndicator
        : (startIcon ?? null);

    const renderEndIcon =
      loading && loadingPosition === "end"
        ? loadingIndicator
        : (endIcon ?? null);

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, color, rounded }),
          disableAnimation && "active:scale-0",
          noPadding && "h-auto p-0",
          className,
        )}
        ref={ref}
        aria-busy={loading}
        aria-label={props["aria-label"] || (loading ? "Loading" : undefined)}
        disabled={loading || disabled}
        {...props}
      >
        {renderStartIcon && renderStartIcon}
        <Slottable>{children}</Slottable>
        {renderEndIcon && renderEndIcon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
