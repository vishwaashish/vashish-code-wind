import { cn } from "@/lib/utils";
import { Code2 } from "lucide-react";
import { ReactNode } from "react";
import { SyntaxHighlighter } from "./shiki";
import TabbedContent from "./TabbedContent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

// export const useComponent = ({
//   directory,
//   componentName,
// }: {
//   directory: string;
//   componentName: string;
// }) => {
//   // const singular = directory.slice(0, directory.length - 1);
//   // const fileData = await import(
//   //   `@/components/${directory}/${componentName}`
//   // ).catch(() => null);
//   // return fileData;
// };

export default async function DemoComponent({
  directory,
  componentName,
  className,
  showCopy = true,
  children,
  ...props
}: {
  directory: string;
  componentName: string;
  className?: string;
  showCopy?: boolean;
  children?: ({ html }: { html: string }) => ReactNode;
}) {
  const singular = directory.slice(0, directory.length - 1);
  console.log("singular", singular);

  const fileData = await import(
    `@/components/${directory}/${componentName}`
  ).catch(() => null);

  if (!fileData) {
    return null;
  }

  const Component = fileData[`${singular}Demo`];

  if (!Component) {
    return null;
  }

  return (
    <>
      {!children && (
        <div className={cn("", className)}>
          <Component {...props} />
        </div>
      )}
      {showCopy && (
        <Dialog>
          <DialogTrigger asChild>
            {/* <CopyButton
              copy={fileData.html}
              className="absolute right-2 top-2 z-10 text-foreground transition-opacity"
            /> */}
            <Code2
              role="button"
              className="absolute right-2 top-2 z-10 text-foreground transition-opacity"
              size={15}
            />
          </DialogTrigger>
          <DialogContent className="max-w-4xl gap-0">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Code2 />
                Source code
              </DialogTitle>
            </DialogHeader>

            <TabbedContent tabs={["Html", "React"]}>
              <SyntaxHighlighter
                maxHeight="450px"
                code={fileData.html}
                language="html"
              />
              <SyntaxHighlighter
                maxHeight="450px"
                code={fileData.react}
                language="jsx"
              />
            </TabbedContent>
          </DialogContent>
        </Dialog>
      )}

      {!!children && children(fileData)}
    </>
  );
}
