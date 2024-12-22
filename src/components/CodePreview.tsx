"use client";

import { formatCode } from "@/lib/utils";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyButton } from "./CopyButton";

/**
 * CodePreview Component: Displays formatted code with copy functionality.
 * @param code - The raw code string.
 * @param language - The language of the code (`html` or `typescript`).
 */
const CodePreview = ({
  code,
  language = "typescript",
}: {
  code: string;
  language?: "html" | "typescript";
}) => {
  const [formattedCode, setFormattedCode] = useState<string>("");

  useEffect(() => {
    const renderCode = async () => {
      try {
        const formatted = await formatCode(`${code}`, language);
        setFormattedCode(formatted);
      } catch (error) {
        console.log("error", error);
      }
    };
    renderCode();
  }, [code, language]);

  return (
    <div className="relative border rounded-lg overflow-hidden bg-gray-900 text-white">
      {/* Copy Button in the corner */}
      <div className="absolute top-2 right-2 z-10">
        <CopyButton title={formattedCode} />
      </div>

      {/* Code Preview */}
      <SyntaxHighlighter
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
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;
