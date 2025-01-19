import { NavigationModel } from "@/types/common.type";

export const navigation: NavigationModel[] = [
  {
    heading: "UI",
    name: "Inputs",
    slug: "ui-inputs",
    url: "/ui/inputs",
  },
  {
    heading: "components",
    name: "Button",
    slug: "Button",
    url: "/component/button",
  },
  {
    heading: "components",
    name: "Key Filter",
    slug: "key-filter",
    url: "/component/keyfilters",
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
  {
    heading: "components",
    name: "Inputs",
    slug: "inputs",
    url: "/component/inputs",
  },
].sort((a, b) => a.name.localeCompare(b.name));
