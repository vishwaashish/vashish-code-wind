"use client";
import { isValidHtmlElement } from "@/lib/utils";
import parse, { DOMNode, domToReact, Element } from "html-react-parser";
import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import CodePreview from "./CodePreview";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

/**
 * Converts raw HTML into a React Component.
 * @param {string} val - The raw HTML string to convert.
 * @returns {React.ReactNode} - The resulting React component.
 */

export function convertJsxToHtmlString(val: string): string {
  const jsx = parse(val, {
    replace: (domNode: DOMNode) => {
      if (domNode.type === "tag" && (domNode as Element).children) {
        const children = (domNode as Element).children as DOMNode[];
        return domToReact(children);
      }
    },
  });
  const response = ReactDOMServer.renderToStaticMarkup(<>{jsx}</>);

  if (isValidHtmlElement(response)) {
    return response;
  }
  return `<div>${response}</div>`;
}

const ToggleTabs = ({
  code,
  preview,
  type = "react",
}: {
  code: string;
  type: string;
  preview: React.ReactNode;
}) => {
  const [codeType, setCodeType] = useState(type);
  const [formattedCode, setFormattedCode] = useState<string>("");

  useEffect(() => {
    const renderCode = async () => {
      try {
        let formatted = code;
        if (codeType === "html") {
          formatted = convertJsxToHtmlString(code);
        }
        setFormattedCode(formatted);
      } catch (error) {
        console.error("Formatting error:", error);
        setFormattedCode(code);
      }
    };

    renderCode();
  }, [codeType, code]);

  return (
    <Tabs defaultValue="preview" className="w-full">
      <div className="flex gap-4 justify-between">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
          <Select
            value={codeType}
            onValueChange={(val) => {
              setCodeType(val);
            }}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="html">Html</SelectItem>
                <SelectItem value="react">React</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
      </div>

      <TabsContent
        value="preview"
        className="border rounded-lg overflow-hidden preview-code"
      >
        {preview}
      </TabsContent>
      <TabsContent value="code" className="border rounded-lg overflow-hidden">
        <CodePreview code={formattedCode} />
      </TabsContent>
    </Tabs>
  );
};

export default ToggleTabs;
