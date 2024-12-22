import Layout from "@/components/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { navigation } from "../../../../../config";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log("slug", slug);
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  const index = navigation.findIndex(
    (val) => val.name.toLowerCase() === slug.toLowerCase()
  );

  const prev = index !== 0 && navigation[index - 1];
  const next = navigation.length - 1 !== index && navigation[index + 1];

  console.log("navigation1", index);

  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize">{slug}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="prose max-w-full mt-3">
        <Post />
      </div>
      <br />
      <br />
      <div className="flex flex-row items-center justify-between">
        {prev && (
          <Button
            variant="ghost"
            // className={cn(index === 0 && "opacity-0")}
            className="mr-auto"
            asChild
          >
            <Link href={prev.url}>
              <ChevronLeft />
              {prev.name}
            </Link>
          </Button>
        )}
        {next && (
          <Button
            variant="ghost"
            className="ml-auto"
            // className={cn(navigation.length - 1 === index && "opacity-0")}
            asChild
          >
            <Link href={next.url}>
              {next.name}
              <ChevronRight />
            </Link>
          </Button>
        )}
      </div>
    </Layout>
  );
}

export function generateStaticParams() {
  return navigation.map((item) => ({ slug: item.slug.toLowerCase() }));
}

export const dynamicParams = false;
