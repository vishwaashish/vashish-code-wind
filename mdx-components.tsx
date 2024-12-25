import { Pre } from "@/components/shiki";
import ToggleCodePreview from "@/components/ToggleCodePreview";
import { Button } from "@/components/ui/button";
import { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Button: Button as React.FC<React.ComponentProps<"button">>,
    ToggleCodePreview: ToggleCodePreview,
    pre: Pre as React.FC<React.ComponentProps<"pre">>,
    code: ({
      children,
      ...props
    }: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >) => {
      return (
        <code {...props} className="relative rounded bg-muted font-mono p-1">
          {children}
        </code>
      );
    },
  };
}
