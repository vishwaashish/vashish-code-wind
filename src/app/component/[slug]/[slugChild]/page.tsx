import DemoComponent from "@/components/DemoComponent";
import Layout from "@/components/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type PageProps = {
  params: Promise<{ slug: string; slugChild: string }>;
};
const page = async ({ params }: PageProps) => {
  const { slug, slugChild } = await params;

  return (
    <Layout>
      <div className="flex">
        <div className="w-full">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink role="button" aria-disabled={true}>
                  <svg
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M3 9.5L12 4l9 5.5M19 13v6.4a.6.6 0 01-.6.6H5.6a.6.6 0 01-.6-.6V13"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/component/${slug}`} className="capitalize">{slug}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="capitalize">{slug}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex min-h-[300px] max-w-full items-center justify-center">
            <DemoComponent
              directory={slug}
              componentName={slugChild}
              className=""
            />
          </div>
          {/* <Separator className="my-10" /> */}
        </div>
      </div>
    </Layout>
  );
};

export default page;
