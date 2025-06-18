import { clsx, type ClassValue } from "clsx";
import parserBabel from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";
import parserHtml from "prettier/plugins/html";
import parserCss from "prettier/plugins/postcss";
import parserTypescript from "prettier/plugins/typescript";
import prettier from "prettier/standalone";
import type {
  BundledLanguage,
  BundledTheme,
  HighlighterGeneric,
  StringLiteralUnion,
  ThemeInput,
} from "shiki/bundle/web";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const copyToClipboard = async (
  data: string | Blob
  // msg: string = "Copied to clipboard!"
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
export async function formatCode(code: string, lang: string) {
  if (["bash", "shell", "plaintext"].includes(lang)) {
    return code;
  }

  let parser = "babel";

  switch (lang) {
    case "html":
      parser = "html";
      break;
    case "typescript":
    case "tsx":
    case "jsx":
      parser = "typescript";
      break;
    case "css":
    case "scss":
    case "less":
      parser = "css";
      break;
    case "json":
      parser = "json";
      break;
    default:
      parser = "babel";
  }

  try {
    return await prettier.format(code, {
      parser,
      semi: true,
      singleQuote: true,
      trailingComma: "all",
      printWidth: 80,
      tabWidth: 2,
      plugins: [
        parserTypescript,
        estreePlugin,
        parserBabel,
        parserHtml,
        parserCss,
      ],
    });
  } catch {
    return code;
  }
}

// const highlighter = createHighlighterCore({
//   themes: [import("shiki/themes/vitesse-light.mjs")],
//   langs: [import("shiki/langs/javascript.mjs")],
//   loadWasm: import("shiki/wasm"),
// });

let highlighterPromise: Promise<
  HighlighterGeneric<BundledLanguage, BundledTheme>
> | null = null;
let memoizedThemes:
  | ("none" | ThemeInput | StringLiteralUnion<BundledTheme, string>)[]
  | null = null;
let memoizedLanguages: string[] | null = null;

// const myTheme = createCssVariablesTheme({
//   name: "css-variables",
//   variablePrefix: "--shiki-",
//   variableDefaults: {},
//   fontStyle: true,
// });
async function getHighlighterInstance() {
  if (!highlighterPromise) {
    const { createHighlighter, bundledThemes, bundledLanguages } = await import(
      "shiki/bundle/web"
    );

    memoizedThemes = memoizedThemes || [bundledThemes["vitesse-dark"]];
    memoizedLanguages = memoizedLanguages || Object.keys(bundledLanguages);

    highlighterPromise = createHighlighter({
      themes: memoizedThemes,
      langs: memoizedLanguages,
    });
  }
  return highlighterPromise;
}

export async function renderCode(
  code = "",
  lang: string = "plaintext",
  theme = "vitesse-dark"
): Promise<string | null> {
  try {
    const highlighter = await getHighlighterInstance();
    return highlighter
      ? highlighter.codeToHtml(code, {
        lang,
        theme,
      })
      : null;
  } catch (error) {
    console.error("Error rendering code:", error);
    return null;
  }
}

export function addHeadingIds(content: string): string {
  return content.replace(/<h([1-6])>(.*?)<\/h\1>/g, (match, level, text) => {
    const id = text.toLowerCase().replace(/\s+/g, "-");
    return `<h${level} id="${id}">${text}</h${level}>`;
  });
}

export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce(
    (result, currentValue) => {
      const groupKey = String(currentValue[key]); // Ensure the key is a string
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(currentValue);
      return result;
    },
    {} as Record<string, T[]>
  );
}

export function formatString(str: string): string {
  if (!str) return ""; // Handle empty or falsy strings

  // Remove underscores and capitalize the first letter
  return str
    .replace(/[_\W]+/g, " ") // Replace underscores with spaces
    .trim() // Remove any leading/trailing spaces
    .replace(/\b\w/, (char) => char.toUpperCase()); // Capitalize the first letter
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL ?? ""}${path}`;
}
