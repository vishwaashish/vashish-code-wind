import { cn } from "@/lib/utils";
import { CopyButton } from "./CopyButton";

export default async function DemoComponent({
  directory,
  componentName,
  className,
  showCopy = true,
  ...props
}: {
  directory: string;
  componentName: string;
  className?: string;
  showCopy?: boolean;
}) {
  const singular = directory.slice(0, directory.length - 1);
  console.log("singular", singular);

  const fileData = await import(
    `@/components/${directory}/${componentName}`
  ).catch(() => null);
  console.log("fileData", fileData, fileData.html);

  if (!fileData) {
    return null;
  }

  const Component = fileData[`${singular}Demo`];

  if (!Component) {
    return null;
  }

  return (
    <>
      <div className={cn("", className)}>
        <Component {...props} />
      </div>
      {showCopy && (
        <CopyButton
          copy={fileData.html}
          className="absolute right-2 top-2 z-10 text-foreground transition-opacity"
        />
      )}
    </>
  );
}
