export interface NavigationModel {
  heading?: string;
  name: string;
  slug: string;
  url: string;
}

export type PageProps = {
  params: Promise<{ slug: string }>;
};