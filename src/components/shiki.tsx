"use client";
import { renderCode } from "@/lib/utils";
import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { BundledLanguage } from "shiki";
import CodePreview from "./CodePreview";

/**
 * Pre component for code blocks
 */

interface PreProps {
  children: React.ReactNode;
  "data-language"?: string;
  className?: string;
}
export const Pre: React.FC<PreProps> = ({ children }) => {
  // const [highlighted, setHighlighted] = useState<string | null>(null);
  const { code, lang } = useMemo(() => {
    let extractedCode = "";
    let extractedLang = "plaintext";

    if (React.isValidElement(children)) {
      const childElement = children as ReactElement<{
        children?: ReactNode;
        className?: string;
      }>;

      // Extract `className` and `children` from the child element's props
      extractedCode =
        typeof childElement.props?.children === "string"
          ? childElement.props.children
          : "";

      if (childElement.props?.className) {
        const match = childElement.props.className.match(/language-([\w-]+)/);
        extractedLang = match ? match[1] : "plaintext";
      }
    }

    return { code: extractedCode, lang: extractedLang };
  }, [children]);

  // useEffect(() => {
  //   let isMounted = true;
  //   let timeoutId: NodeJS.Timeout;

  //   async function highlight() {
  //     try {
  //       timeoutId = setTimeout(async () => {
  //         let formattedCode = code;
  //         if (code) {
  //           formattedCode = await formatCode(code, lang);
  //           const html = await renderCode(formattedCode, lang);
  //           if (isMounted && html) {
  //             setHighlighted(html);
  //           }
  //         }
  //       }, 100); // Slight debounce for performance
  //     } catch (error) {
  //       console.error("Error rendering code:", error);
  //     }
  //   }

  //   highlight();

  //   return () => {
  //     isMounted = false;
  //     clearTimeout(timeoutId);
  //   };
  // }, [code, lang]);

  if (!code) {
    console.warn("No code found in <Pre /> children");
    return null; // Safeguard if `code` is empty
  }

  return (
    <CodePreview code={code} language={lang} />
    // <div className="relative my-4 overflow-auto rounded-lg ">
    //   <CopyButton
    //     copy={code}
    //     className="absolute top-2 right-2 z-10 h-auto w-auto p-1"
    //     height={6}
    //     width={6}
    //   />
    //   {highlighted ? (
    //     <div
    //       className="shiki"
    //       dangerouslySetInnerHTML={{ __html: highlighted }}
    //     />
    //   ) : (
    //     <pre {...props} className="p-4 whitespace-pre-wrap">
    //       {code}
    //     </pre>
    //   )}
    // </div>
  );
};

/**
 * Inline Code Component
 */
export const InlineCode: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className, ...props }) => {
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const lang = className?.replace("language-", "") || "plaintext";

  useEffect(() => {
    async function highlight() {
      const html = await renderCode(
        children as string,
        lang as BundledLanguage
      );
      setHighlighted(html);
    }
    highlight();
  }, [children, lang]);

  if (highlighted) {
    return (
      <code
        {...props}
        dangerouslySetInnerHTML={{ __html: highlighted }}
        className="block overflow-auto"
      />
    );
  }

  return (
    <code {...props} className={`language-${lang}`}>
      {children}
    </code>
  );
};
