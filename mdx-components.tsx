import { Pre } from "@/components/shiki";
import ToggleCodePreview from "@/components/ToggleCodePreview";
import { Button } from "@/components/ui/button";
import { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Button: Button,
    ToggleCodePreview: ToggleCodePreview,
    pre: Pre,
    code: ({ children }) => {
      return (
        <code className="relative rounded bg-muted font-mono p-1">
          {children}
        </code>
      );
    },
  };
}
