export interface NavigationModel {
  heading?: string;
  name: string;
  slug: string;
  url: string;
}

export type PageParamProps = {
  params: Promise<{ slug: string }>;
};
export type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
