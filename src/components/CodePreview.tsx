"use client";

import { formatCode, renderCode } from "@/lib/utils";
import { useEffect, useState } from "react";
import { CopyButton } from "./CopyButton";

/**
 * CodePreview Component: Displays formatted code with copy functionality.
 * @param code - The raw code string.
 * @param language - The language of the code (`html` or `typescript`).
 */
const CodePreview = ({
  code,
  language = "tsx",
}: {
  code: string;
  language?: string;
}) => {
  const [formattedCode, setFormattedCode] = useState<string>("");

  useEffect(() => {
    const renderCodeData = async () => {
      try {
        const formatted = await formatCode(`${code}`, language);
        const html = await renderCode(formatted, language);
        setFormattedCode(html ?? "");
      } catch (error) {
        console.log("error", error);
      }
    };
    renderCodeData();
  }, [code, language]);

  return (
    <div className="relative">
      {/* Copy Button in the corner */}
      <div className="absolute top-2 right-2 z-10">
        <CopyButton title={formattedCode} width={4} height={4} />
      </div>

      {formattedCode ? (
        <div
          className="shiki"
          dangerouslySetInnerHTML={{ __html: formattedCode }}
        />
      ) : (
        <pre
          className="p-4 whitespace-pre-wrap"
          style={{ paddingInline: "0.3rem", paddingBlock: "0.2rem" }}
        >
          {code}
        </pre>
      )}

      {/* <Pre>{formattedCode}</Pre> */}

      {/* Code Preview */}
      {/* <SyntaxHighlighter
        language={language}
        style={agate}
        customStyle={{
          margin: 0,
          padding: "1rem",
          borderRadius: "0.5rem",
          background: "#1e1e1e",
        }}
      >
        {formattedCode}
      </SyntaxHighlighter> */}
    </div>
  );
};

export default CodePreview;
