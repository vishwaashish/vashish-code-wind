import { CopyButton } from "@/components/CopyButton";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => {
      return (
        <pre className="relative">
          <div className="absolute top-2 right-2 z-10">
            <CopyButton
              className="w-auto p-1 h-auto"
              width={2}
              height={2}
              copy={children.props.children}
            />
          </div>
          {children}
        </pre>
      );
    },
    ...components,
  };
}
