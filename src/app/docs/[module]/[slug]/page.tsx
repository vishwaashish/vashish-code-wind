import DocumentationPage from "@/components/DocumentationPage";
import { absoluteUrl } from "@/lib/utils";
import { allDocuments } from "contentlayer/generated";
import { notFound } from "next/navigation";

// Types
type Params = { slug: string; module: string };
type Props = { params: Promise<Params> };

// Metadata
export async function generateMetadata({ params }: Props) {
  const { slug, module } = await params;
  try {
    const { frontmatter: doc } = await import(`@/content/${module}/${slug}.mdx`);
    if (!doc) return notFound();

    return {
      title: doc.title,
      description: doc.description,
      openGraph: {
        title: doc.title,
        description: doc.description,
        type: "article",
        url: absoluteUrl(doc.slug),
      },
      twitter: {
        card: "summary_large_image",
        title: doc.title,
        description: doc.description,
        creator: "vashish",
      },
    };
  } catch {
    return notFound();
  }
}

export default async function Page({ params }: Props) {
  const { slug, module } = await params;

  if (!slug || !module) return notFound();

  let importedModule;
  try {
    importedModule = await import(`@/content/${module}/${slug}.mdx`);
  } catch (err) {
    return notFound();
  }

  if (!importedModule) return notFound();

  const { default: Post, frontmatter } = importedModule

  const sortedDocs = allDocuments.sort((a, b) =>
    a.slugAsParams.localeCompare(b.slugAsParams),
  );

  const index = sortedDocs.findIndex((val) => val.slugAsParams === slug);

  const prev = index > 0 ? sortedDocs[index - 1] : undefined;
  const next = index < sortedDocs.length - 1 ? sortedDocs[index + 1] : undefined;

  return (
    <DocumentationPage
      slug={slug}
      title={frontmatter.title}
      description={frontmatter.description}
      links={frontmatter.links}
      content={<Post />}
      showBreadcrumb={frontmatter.breadcrumb ?? true}
      showTOC={frontmatter.toc ?? true}
      prev={prev}
      next={next}
    />
  );
}

export async function generateStaticParams(): Promise<{ slug: string, }[]> {
  return allDocuments.map((doc) => ({
    slug: doc.slugAsParams,
  }));
}

export const dynamicParams = false;
