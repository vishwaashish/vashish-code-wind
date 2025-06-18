import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from 'react';
import Layout from './Layout';
import TableOfContents from './TableOfContents';
import { Separator } from './ui/separator';
import { DocumentTypes, LinksProperties } from "contentlayer/generated";
import { formatString } from "@/lib/utils";




// -------------------
// Props
// -------------------
interface DocumentationPageProps {
    title: string;
    description?: string;
    slug: string;
    content: React.ReactNode;
    links?: LinksProperties[];
    showBreadcrumb?: boolean;
    showTOC?: boolean;
    prev?: DocumentTypes;
    next?: DocumentTypes;
}

// -------------------
// Component
// -------------------
const DocumentationPage: React.FC<DocumentationPageProps> = ({
    title,
    description,
    slug,
    content,
    links,
    showBreadcrumb = true,
    showTOC = true,
    prev,
    next,
}) => {
    return (
        <Layout>
            <div className="flex">
                <div className="w-full">
                    {showBreadcrumb && <BreadcrumbNav slug={slug} />}

                    <div className="max-w-full">
                        <h1 className="font-heading mt-2 scroll-m-20 text-4xl font-bold">
                            {title}
                        </h1>

                        <ExternalLinks links={links} />

                        {description && (
                            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
                                {description}
                            </p>
                        )}

                        <div className="pb-12 pt-8">
                            <Suspense fallback={null}>{content}</Suspense>
                        </div>
                    </div>

                    <Separator className="my-10" />
                    <PostNavigation prev={prev} next={next} />
                </div>

                {showTOC && (
                    <TableOfContents className="ml-10 hidden basis-52 lg:block" />
                )}
            </div>
        </Layout>
    );
};



// Components
const BreadcrumbNav = ({ slug }: { slug: string }) => (
    <Breadcrumb className="mb-4">
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink role="link" aria-label="Home">
                    <svg
                        role="img"
                        aria-hidden="true"
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
                        />
                    </svg>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage className="capitalize">{slug}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
);

const ExternalLinks = ({ links }: { links?: LinksProperties[] }) => {
    if (!links?.length) return null;
    return (
        <div className="mt-3 flex gap-2">
            {links.map((link) => (
                <Button
                    key={link.label}
                    className="h-auto rounded-full px-3 py-1 text-xs"
                    variant="outlined"
                    startIcon={<SquareArrowOutUpRight className="!h-3 !w-3" />}
                    asChild
                >
                    <Link href={link.url ?? "#"}>{link.label}</Link>
                </Button>
            ))}
        </div>
    );
};

const PostNavigation = ({
    prev,
    next,
}: {
    prev?: DocumentTypes | undefined;
    next?: DocumentTypes | undefined;
}) => {
    return (
        <div className="flex flex-row items-center justify-between">
            {prev && (
                <Button variant="ghost" className="mr-auto h-auto" asChild>
                    <Link href={`/docs/${prev.slug}`}>
                        <div className="flex items-end gap-1">
                            <ChevronLeft className="mb-[2.7px] !size-6" />
                            <div className="flex flex-col gap-0">
                                <span className="text-xs text-left text-muted-foreground">Prev</span>
                                <strong className="text-lg">{formatString(prev.slugAsParams || prev.slug)}</strong>
                            </div>
                        </div>
                    </Link>
                </Button>
            )}
            {next && (
                <Button variant="ghost" className="ml-auto h-auto" asChild>
                    <Link href={`/docs/${next.slug}`}>
                        <div className="flex items-end gap-1">
                            <div className="flex flex-col gap-0">
                                <span className="text-xs text-right text-muted-foreground">Next</span>
                                <strong className="text-lg">{formatString(next.slugAsParams || next.slug)}</strong>
                            </div>
                            <ChevronRight className="mb-[2.7px] !size-6" />
                        </div>
                    </Link>
                </Button>
            )}
        </div>
    );
};

export default DocumentationPage