import { NavigationModel } from "@/types/common.type";

export const navigation: NavigationModel[] = [
  {
    heading: "components",
    name: "Button",
    slug: "button",
    url: "/component/button",
  },
  {
    heading: "components",
    name: "Loaders",
    slug: "loaders",
    url: "/component/loaders",
  },
].sort((a, b) => a.name.localeCompare(b.name));
