import Layout from "@/components/Layout";
import TableOfContents from "@/components/TableOfContents";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { absoluteUrl, formatString } from "@/lib/utils";
import { allComponents, Component } from "contentlayer/generated";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getComponentFromParams(slug: string) {
  const doc = allComponents.find((doc) => doc.slugAsParams === slug);
  return doc || null;
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const doc = await getComponentFromParams(slug);

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      // images: [
      //   {
      //     url: siteConfig.ogImage,
      //     width: 1200,
      //     height: 630,
      //     alt: siteConfig.name,
      //   },
      // ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      // images: [siteConfig.ogImage],
      creator: "vashish",
    },
  };
}

const MDXContent = async ({ slug }: { slug: string }) => {
  try {
    const Component = (await import(`@/content/component/${slug}.mdx`)).default;
    return <Component />;
  } catch (error) {
    console.error("Failed to load MDX content for slug:", slug, error);
    return <div>Error loading content.</div>;
  }
};

export default async function Page({ params }: Props) {
  const slug = (await params).slug;

  if (!slug) {
    return notFound();
  }

  const components = await getComponentFromParams(slug);

  if (!components) {
    return notFound();
  }

  // const { default: Post } = await import(`@/content/component/${slug}.mdx`);

  const allComp = allComponents.sort((a: Component, b: Component) =>
    a.slugAsParams.localeCompare(b.slugAsParams),
  );

  const index = allComp.findIndex((val) => val.slugAsParams === slug);

  const prev = index !== 0 && allComp[index - 1];
  const next = allComp.length - 1 !== index && allComp[index + 1];

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
                <BreadcrumbPage className="capitalize">{slug}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-full">
            {/* <Post /> */}
            <Suspense>
              <MDXContent slug={slug} />
            </Suspense>
          </div>
          <Separator className="my-10" />
          <div className="flex flex-row items-center justify-between">
            {!!prev && (
              <Button variant="ghost" className="mr-auto h-auto" asChild>
                <Link href={prev.slug}>
                  <div className="flex items-end gap-1">
                    <ChevronLeft className="mb-[2.7px] !size-6" />
                    <div className="flex flex-col gap-0">
                      <span className="text-xs text-muted-foreground">
                        Prev
                      </span>
                      <strong className="text-lg">
                        {" "}
                        {formatString(prev.slugAsParams)}
                      </strong>
                    </div>
                  </div>
                </Link>
              </Button>
            )}
            {next && (
              <Button variant="ghost" className="ml-auto h-auto" asChild>
                <Link href={next.slug}>
                  <div className="flex items-end gap-1">
                    <div className="flex flex-col gap-0">
                      <span className="text-xs text-muted-foreground">
                        Next
                      </span>
                      <strong className="text-lg">
                        {" "}
                        {formatString(next.slugAsParams)}
                      </strong>
                    </div>
                    <ChevronRight className="mb-[2.7px] !size-6" />
                  </div>
                </Link>
              </Button>
            )}
          </div>
        </div>

        <TableOfContents className="ml-10 hidden basis-52 lg:block" />
      </div>
    </Layout>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allComponents.map((doc) => ({
    slug: doc.slugAsParams,
  }));
}

export const dynamicParams = false;
