"use client";
import { cn, copyToClipboard } from "@/lib/utils";
import { Clipboard, ClipboardCheck } from "lucide-react";
import React, { ReactElement, ReactNode, useState } from "react";
// import { BundledLanguage } from "shiki";

/**
 * Pre component for code blocks
 */

// interface PreProps {
//   children: React.ReactNode;
//   "data-language"?: string;
//   className?: string;
// }
// export const Pre: React.FC<PreProps> = ({ children }) => {
//   // const [highlighted, setHighlighted] = useState<string | null>(null);
//   const { code, lang } = useMemo(() => {
//     let extractedCode = "";
//     let extractedLang = "plaintext";

//     if (React.isValidElement(children)) {
//       const childElement = children as ReactElement<{
//         children?: ReactNode;
//         className?: string;
//       }>;

//       // Extract `className` and `children` from the child element's props
//       extractedCode =
//         typeof childElement.props?.children === "string"
//           ? childElement.props.children
//           : "";

//       if (childElement.props?.className) {
//         const match = childElement.props.className.match(/language-([\w-]+)/);
//         extractedLang = match ? match[1] : "plaintext";
//       }
//     }

//     return { code: extractedCode, lang: extractedLang };
//   }, [children]);

//   // useEffect(() => {
//   //   let isMounted = true;
//   //   let timeoutId: NodeJS.Timeout;

//   //   async function highlight() {
//   //     try {
//   //       timeoutId = setTimeout(async () => {
//   //         let formattedCode = code;
//   //         if (code) {
//   //           formattedCode = await formatCode(code, lang);
//   //           const html = await renderCode(formattedCode, lang);
//   //           if (isMounted && html) {
//   //             setHighlighted(html);
//   //           }
//   //         }
//   //       }, 100); // Slight debounce for performance
//   //     } catch (error) {
//   //       console.error("Error rendering code:", error);
//   //     }
//   //   }

//   //   highlight();

//   //   return () => {
//   //     isMounted = false;
//   //     clearTimeout(timeoutId);
//   //   };
//   // }, [code, lang]);

//   if (!code) {
//     console.warn("No code found in <Pre /> children");
//     return null; // Safeguard if `code` is empty
//   }

//   return ();
// };

interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

type ReactElementWithChildren = ReactElement<{ children?: ReactNode }>;

// Type guard for React elements with children
function isReactElementWithChildren(
  node: unknown
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
          "mb-4 mt-6 overflow-x-auto relative rounded-lg whitespace-pre-wrap break-words border-code bg-code p-4 [&>code]:p-0 [&>code]:bg-transparent [&>code]:border-0",
          className
        )}
        {...props}
      >
        <button
          onClick={handleCopy}
          className="w-6 h-6 flex absolute backdrop-blur-[3px] text-white rounded-[25%] right-2 z-[1]"
          aria-label="Copy code to clipboard"
        >
          {copied ? <ClipboardCheck size={15} /> : <Clipboard size={15} />}
        </button>
        {children}
      </pre>
    </>
  );
};
