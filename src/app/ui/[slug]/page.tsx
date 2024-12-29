import DemoComponent from "@/components/DemoComponent";
import Layout from "@/components/Layout";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{ slug: string }>;
};

const ui: Record<string, string[]> = {
  loaders: [
    "loader-01",
    "loader-02",
    "loader-03",
    "loader-04",
    "loader-05",
    "loader-06",
  ],
};

const page = async ({ params }: Props) => {
  const slug = (await params).slug;

  const files = ui[slug];

  if (!files) {
    return notFound();
  }

  return (
    <Layout>
      <style>
        {`
      :root{
         --loader-primary: hsl(var(--primary));
    --loader-secondary: hsl(var(--muted));
    --loader-border: 5px;
    --loader-width: 48px;
    --loader-speed: 1s;
        }

    `}
      </style>

      <div className="mb-16">
        <h1 className="font-heading mt-2 scroll-m-20 text-4xl font-bold">
          CSS Loaders Gallery
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Enhance User Experience and Aesthetics with Our Range of Creative CSS
          Loaders for Seamless Loading Animations
        </p>
      </div>

      <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
        {files.map((componentName) => {
          return (
            <div
              key={componentName}
              className="group/item relative flex items-center justify-center"
            >
              <DemoComponent
                key={componentName}
                directory={slug}
                componentName={componentName}
                className="text-center"
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default page;
