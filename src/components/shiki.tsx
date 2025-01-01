"use client";
import moonlightTheme from "@/assets/moonlight-ii.json";
import { cn, copyToClipboard, formatCode } from "@/lib/utils";
import { Clipboard, ClipboardCheck } from "lucide-react";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import type { Options, Theme } from "rehype-pretty-code";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkToc from "remark-toc";
import { unified } from "unified";
import { CopyButton } from "./CopyButton";

export function SyntaxHighlighter({
  code = "",
  language = "jsx",
  className = "",
  maxHeight = "",
}: {
  code: string;
  className?: string;
  language?: "plaintext" | "html" | "css" | "jsx" | "tsx";
  maxHeight?: string;
}) {
  const [syntaxCode, setSyntaxCode] = useState<string>("");
  const [formattedCode, setFormattedCode] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const fcode = await formatCode(code, language);
        const file = await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(remarkToc)
          .use(remarkFrontmatter)
          .use(rehypePrettyCode, {
            theme: moonlightTheme as unknown as Theme,
            keepBackground: false,
            grid: false,
          } as Options)
          .use(rehypeStringify)
          .process("```" + language + "\n" + fcode.trim() + "\n```");

        setFormattedCode(fcode);
        setSyntaxCode(String(file));
      } catch (error) {
        console.error("Error processing Markdown:", error);
        setSyntaxCode("Failed to render syntax-highlighted code.");
      }
    })();
  }, [code, language]);

  const height = `[&_pre]:max-h-[${maxHeight}]`;

  if (!syntaxCode) {
    return (
      <div
        className={cn(
          "flex h-full w-full animate-pulse items-center overflow-auto rounded-lg border-code bg-code",
          height,
        )}
      >
        <div className="flex-1 space-y-3 p-4">
          <div className="h-2 w-2/6 rounded bg-slate-700"></div>
          <div className="h-2 w-3/6 rounded bg-slate-700"></div>
          <div className="h-2 w-4/6 rounded bg-slate-700"></div>
          <div className="h-2 w-3/6 rounded bg-slate-700"></div>
          <div className="h-2 w-5/6 rounded bg-slate-700"></div>
          <div className="h-2 w-4/6 rounded bg-slate-700"></div>
          <div className="h-2 w-1/6 rounded bg-slate-700"></div>
          <div className="h-2 w-4/6 rounded bg-slate-700"></div>
          <div className="w-6/6 h-2 rounded bg-slate-700"></div>
          <div className="h-2 w-3/6 rounded bg-slate-700"></div>
          <div className="h-2 w-2/6 rounded bg-slate-700"></div>
          <div className="h-2 w-5/6 rounded bg-slate-700"></div>
          <div className="h-2 w-4/6 rounded bg-slate-700"></div>
          <div className="h-2 w-1/6 rounded bg-slate-700"></div>
          <div className="h-2 w-2/6 rounded bg-slate-700"></div>
          <div className="h-2 w-3/6 rounded bg-slate-700"></div>
          <div className="w-0/6 h-2 rounded bg-slate-700"></div>
          <div className="h-2 w-1/6 rounded bg-slate-700"></div>
          <div className="h-2 w-3/6 rounded bg-slate-700"></div>
          <div className="h-2 w-5/6 rounded bg-slate-700"></div>
          <div className="h-2 w-2/6 rounded bg-slate-700"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <CopyButton copy={formattedCode} className="m-2" />
      <div
        className={cn(
          "border-code bg-code [&_pre]:overflow-auto [&_pre]:p-4",
          height,
          className,
        )}
        dangerouslySetInnerHTML={{ __html: syntaxCode }}
      ></div>
    </div>
  );
}

interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

type ReactElementWithChildren = ReactElement<{ children?: ReactNode }>;

// Type guard for React elements with children
function isReactElementWithChildren(
  node: unknown,
): node is ReactElementWithChildren {
  return (
    React.isValidElement(node) &&
    node.props !== null &&
    typeof node.props === "object" &&
    "children" in node.props
  );
}

const extractText = (children: ReactNode): string => {
  if (typeof children === "string") {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map(extractText).join("");
  }

  if (isReactElementWithChildren(children)) {
    return extractText(children.props.children);
  }

  return "";
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  className,
  children,
  ...props
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = extractText(children);
    try {
      if (typeof text === "string") {
        copyToClipboard(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  if (!extractText(children)) {
    return;
  }

  return (
    <>
      <pre
        className={cn(
          "relative mb-4 mt-6 overflow-x-auto whitespace-pre-wrap break-words rounded-lg border-code bg-code p-4 text-foreground [&>code]:border-0 [&>code]:bg-transparent [&>code]:p-0",
          className,
        )}
        {...props}
      >
        <button
          onClick={handleCopy}
          className="absolute right-2 z-[1] flex h-6 w-6 rounded-[25%] text-white backdrop-blur-[3px]"
          aria-label="Copy code to clipboard"
        >
          {copied ? <ClipboardCheck size={15} /> : <Clipboard size={15} />}
        </button>
        {children}
      </pre>
    </>
  );
};
