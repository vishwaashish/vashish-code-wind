import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/utils";
import { allUIs } from "contentlayer/generated";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getComponentFromParams(slug: string) {
  const doc = allUIs.find((doc) => doc.slugAsParams === slug);
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
    const Component = (await import(`@/content/ui/${slug}.mdx`)).default;
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

  return (
    <Layout>
      <div className="flex">
        <div className="w-full">
          <div className="max-w-full">
            <h1 className="font-heading mt-2 scroll-m-20 text-4xl font-bold">
              {components.title}
            </h1>
            {!!components?.links?.length && (
              <div className="mt-3 flex gap-2">
                {components.links?.map((link) => (
                  <Button
                    className="h-auto rounded-full px-3 py-1 text-xs"
                    variant={"outlined"}
                    key={link.label}
                    startIcon={<SquareArrowOutUpRight className="!h-3 !w-3" />}
                    asChild
                  >
                    <Link href={link.url ?? "#"}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            )}
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
              {components.description}
            </p>
            <div className="pb-12 pt-8">
              <Suspense fallback={<></>}>
                <MDXContent slug={slug} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allUIs.map((doc) => ({
    slug: doc.slugAsParams,
  }));
}

export const dynamicParams = false;
