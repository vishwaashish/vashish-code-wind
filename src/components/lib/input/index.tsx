"use client";
import {
  ClipboardEvent,
  FormEvent,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEvent,
  useRef,
} from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { KeyFilter, KeyFilterType } from "../keyfilter";

const inputVariants = cva(
  "flex h-9 w-full px-3 rounded-md border border-input bg-transparent text-base  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 ",
  {
    variants: {
      size: {
        sm: "h-7 text-sm py-1",
        md: "text-sm py-1",
        lg: "h-12 text-base py-3",
      },
      variant: {
        outlined: "",
        filled: "bg-muted",
      },
      state: {
        invalid: "border-destructive text-destructive",
        valid: "border-green-500",
        default: "",
      },
      position: {
        default: "",
        left: "pl-8",
        right: "pr-8",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "outlined",
      state: "default",
      position: "default",
    },
  },
);

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onInput" | "size">,
    VariantProps<typeof inputVariants> {
  keyfilter?: KeyFilterType;
  invalid?: boolean;
  valid?: boolean;
  validateOnly?: boolean;
  onInput?: (event: FormEvent<HTMLInputElement>, isValid: boolean) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      keyfilter,
      invalid = false,
      valid = false,
      validateOnly = false,
      className,
      onInput,
      size,
      variant,
      state,
      position,
      ...rest
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (keyfilter) {
        KeyFilter.onKeyPress(event, keyfilter, validateOnly);
      }
    };

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
      let isValid = true;
      if (keyfilter && validateOnly) {
        isValid = KeyFilter.validate(event, keyfilter);
      }
      onInput?.(event, isValid);
    };

    const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
      if (keyfilter) {
        KeyFilter.onPaste(event, keyfilter, validateOnly);
      }
    };

    const inputClass = cn(
      inputVariants({
        size,
        variant,
        state: (state ?? invalid) ? "invalid" : valid ? "valid" : "default",
        position,
      }),
      className,
    );

    return (
      <input
        ref={(node) => {
          inputRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={inputClass}
        onKeyDown={onKeyDown}
        onInput={handleInput}
        onPaste={handlePaste}
        aria-invalid={invalid}
        {...rest}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
