import { useDynamicComponentProps } from "@/components/hooks/component";
import PreviewComponent from "@/components/PreviewComponent";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<useDynamicComponentProps>;
};

async function PreviewPage(props: PageProps) {
  const { component, directory, componentName } = await props.searchParams;
  return (
    <PreviewComponent
      component={component}
      directory={directory}
      componentName={componentName}
    />
  );
}

export default PreviewPage;
