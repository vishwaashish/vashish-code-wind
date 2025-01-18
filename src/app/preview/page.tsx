import PreviewComponent from "@/components/PreviewComponent";
// const convertRegistryPaths = (content: string): string => {
//   return content
//     .replace(/@\/registry\/default\/ui/g, "@/components/ui")
//     .replace(/@\/registry\/default\/components/g, "@/components")
//     .replace(/@\/registry\/default\/hooks/g, "@/hooks")
//     .replace(/@\/registry\/default\/lib/g, "@/lib");
// };
async function PreviewPage() {
  // const source = convertRegistryPaths(
  //   (await readComponentSource("CopyButton")) || "",
  // );
  // console.log("source", source);
  // const componentName = "CopyButton";
  // const filePath = path.join(
  //   process.cwd(),
  //   // "registry",
  //   // "default",
  //   "src",
  //   "components",
  //   `${componentName}.tsx`,
  // );
  // try {
  //   const source = await fs.readFile(filePath, "utf8");
  //   console.log("source", source);
  //   const data = convertRegistryPaths(await source);
  //   console.log("source", data);
  //   return source;
  // } catch (error) {
  //   console.error(`Error reading file ${filePath}:`, error);
  //   return null;
  // }
  return (
    // <Suspense
    //   fallback={
    //     <div className="flex h-screen items-center justify-center">
    //       <div className="spinner"></div>Loading Component...
    //     </div>
    //   }
    // >
    <PreviewComponent />
    // </Suspense>
  );
}

export default PreviewPage;
