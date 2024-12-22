import { clsx, type ClassValue } from "clsx";
import estreePlugin from "prettier/plugins/estree";
import html from "prettier/plugins/html";
import parserTypescript from "prettier/plugins/typescript";
import prettier from "prettier/standalone";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const copyToClipboard = async (
  data: string | Blob,
  msg: string = "Copied to clipboard!"
) => {
  try {
    if (typeof data === "string") {
      await navigator.clipboard.writeText(data);
    } else if (data instanceof Blob) {
      const item = new ClipboardItem({ "image/png": data });
      await navigator.clipboard.write([item]);
    } else {
      throw new Error("Unsupported data type");
    }

    // toast.success(msg, { id: String(data) });
    return true;
  } catch {
    // toast.error("Error copying to clipboard");
    return false;
  }
};

/**
 * Formats the provided code string using Prettier.
 * @param code - The code string to format.
 * @param parser - The Prettier parser to use.
 * @returns Formatted code string.
 */
export async function formatCode(code: string, parser: "html" | "typescript") {
  return await prettier.format(code, {
    parser,
    semi: true,
    singleQuote: true,
    trailingComma: "all",
    printWidth: 80,
    tabWidth: 2,
    plugins: [parserTypescript, html, estreePlugin],
  });
}


/**
 * Validates if an HTML string contains a single valid root element.
 * @param {string} html - The HTML string to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export function isValidHtmlElement(html: string): boolean {
  // Remove spaces, newlines, and comments from the HTML
  const cleanedHtml = html
    .trim()
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\n/g, "");

  // Match valid root elements
  const match = cleanedHtml.match(/^<(\w+)[^>]*>[\s\S]*<\/\1>$/);

  // Check if it's a valid root tag and no extra sibling elements
  if (!match) {
    return false;
  }

  // Ensure no content exists outside the root tag
  const hasExtraContent = cleanedHtml.replace(match[0], "").trim().length > 0;

  return !hasExtraContent;
}
