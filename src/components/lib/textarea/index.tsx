"use client";
import {
  ClipboardEvent,
  FormEvent,
  forwardRef,
  KeyboardEvent,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { KeyFilter, KeyFilterType } from "../keyfilter";

const textareaVariants = cva(
  "flex px-3 py-2 rounded-md border border-input bg-transparent text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 ",
  {
    variants: {
      variant: {
        outlined: "",
        filled: "bg-muted",
      },
      state: {
        invalid: "border-destructive",
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
      variant: "outlined",
      state: "default",
      position: "default",
    },
  },
);

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onInput" | "size">,
    VariantProps<typeof textareaVariants> {
  keyfilter?: KeyFilterType;
  invalid?: boolean;
  valid?: boolean;
  validateOnly?: boolean;
  autoResize?: boolean;
  onInput?: (event: FormEvent<HTMLTextAreaElement>, isValid: boolean) => void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      keyfilter,
      invalid = false,
      valid = false,
      validateOnly = false,
      autoResize = false,
      className,
      onInput,
      state,
      variant,
      position,
      ...rest
    },
    ref,
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const cachedScrollHeight = useRef(0);

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (keyfilter) {
        KeyFilter.onKeyPress(event, keyfilter, validateOnly);
      }
    };

    const handleInput = (event: FormEvent<HTMLTextAreaElement>) => {
      const target = event.target as HTMLTextAreaElement;
      let isValid = true;
      if (keyfilter && validateOnly) {
        isValid = KeyFilter.validate(event, keyfilter);
      }
      if (autoResize) {
        resize(target);
      }
      onInput?.(event, isValid);
    };

    const handlePaste = (event: ClipboardEvent<HTMLTextAreaElement>) => {
      if (keyfilter) {
        KeyFilter.onPaste(event, keyfilter, validateOnly);
      }
    };

    const resize = (textarea: HTMLTextAreaElement) => {
      if (textarea) {
        if (!cachedScrollHeight.current) {
          cachedScrollHeight.current = textarea.scrollHeight;
          textarea.style.overflow = "hidden";
        }

        const cursorPosition = textarea.selectionStart;

        textarea.style.height = "";
        textarea.style.height = textarea.scrollHeight + "px";

        textarea.selectionStart = cursorPosition;
        textarea.selectionEnd = cursorPosition;

        if (
          parseFloat(textarea.style.height) >=
          parseFloat(textarea.style.maxHeight || "10000px")
        ) {
          textarea.style.overflowY = "scroll";
        } else {
          textarea.style.overflow = "hidden";
        }
      }
    };

    useEffect(() => {
      if (autoResize && textareaRef.current) {
        resize(textareaRef.current);
      }
    }, [autoResize]);

    const textareaClass = cn(
      textareaVariants({
        variant,
        state: (state ?? invalid) ? "invalid" : valid ? "valid" : "default",
        position,
      }),
      autoResize && "resize-none",
      className,
    );

    return (
      <textarea
        ref={(node) => {
          textareaRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={textareaClass}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        onPaste={handlePaste}
        aria-invalid={invalid}
        {...rest}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
