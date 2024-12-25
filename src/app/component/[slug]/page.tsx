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
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { navigation } from "../../../../config";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  const index = navigation.findIndex(
    (val) => val.name.toLowerCase() === slug.toLowerCase()
  );

  const prev = index !== 0 && navigation[index - 1];
  const next = navigation.length - 1 !== index && navigation[index + 1];

  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              role="button"
              // className={cn(buttonVariants({ variant: "ghost" }), "h-8 w-8")}
              aria-disabled={true}
            >
              <svg
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
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
      <div className="prose dark:prose-invert max-w-full mt-3">
        <Post />
      </div>
      <Separator className="my-10" />
      <div className="flex flex-row items-center justify-between">
        {prev && (
          <Button
            variant="ghost"
            // className={cn(index === 0 && "opacity-0")}
            className="mr-auto h-auto"
            asChild
          >
            <Link href={prev.url}>
              <div className="flex items-end gap-1">
                <ChevronLeft className="!size-6 mb-[2.7px]" />
                <div className="flex flex-col gap-0">
                  <span className="text-xs text-muted-foreground">Prev</span>
                  <strong className="text-lg"> {prev.name}</strong>
                </div>
              </div>
            </Link>
          </Button>
        )}
        {next && (
          <Button variant="ghost" className="ml-auto h-auto" asChild>
            <Link href={next.url}>
              <div className="flex items-end gap-1">
                <div className="flex flex-col gap-0">
                  <span className="text-xs text-muted-foreground">Next</span>
                  <strong className="text-lg"> {next.name}</strong>
                </div>
                <ChevronRight className="!size-6 mb-[2.7px]" />
              </div>
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
