import { NavigationModel } from "@/types/common.type";

export const navigation: NavigationModel[] = [
  {
    heading: "components",
    name: "Button",
    slug: "Button",
    url: "/component/button",
  },
  {
    heading: "components",
    name: "Loaders",
    slug: "Loaders",
    url: "/component/loaders",
  },
  {
    heading: "components",
    name: "Headers",
    slug: "Headers",
    url: "/component/headers",
  },
].sort((a, b) => a.name.localeCompare(b.name));
