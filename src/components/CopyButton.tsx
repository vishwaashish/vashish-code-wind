"use client";
import { Tooltip } from "@/components/ui/tooltip";
import { cn, copyToClipboard } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { MouseEvent, useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";

interface CopyButtonModel
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  width?: number;
  height?: number;
  copy?: string;
}

export const CopyButton = ({
  copy = "",
  onClick,
  className,
  width = 5,
  height = 5,
  ...rest
}: CopyButtonModel) => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    if (state) {
      const data = setTimeout(() => {
        setState(false);
      }, 1000);

      return () => {
        clearTimeout(data);
      };
    }
  }, [state]);

  const onButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    setState(true);
    if (copy) {
      copyToClipboard(copy);
    }
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <Tooltip title={state ? "Copied!" : "Copy"}>
      <Button
        variant="ghost"
        className={cn(
          "",
          //   state && "swap-active",
          className
        )}
        // className={className}
        onClick={onButtonClick}
        size="icon"
        {...rest}
      >
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={width}
            height={height}
            // className={`w-${width} h-${height} swap-on`}
          >
            <path
              strokeLinecap="round"
              className="text-primary"
              strokeLinejoin="round"
              d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            // className={`w-${width} h-${height} swap-off`}
            width={width}
            height={height}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        )}
      </Button>
    </Tooltip>
  );
};
