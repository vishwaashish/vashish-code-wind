import { NavigationModel } from "@/types/common.type";

export const navigation: NavigationModel[] = [
  {
    heading: "UI",
    name: "Inputs",
    slug: "ui-inputs",
    url: "/ui/inputs",
  },
  {
    heading: "UI",
    name: "Loaders",
    slug: "Loaders",
    url: "/ui/loaders",
  },
  {
    heading: "UI",
    name: "Headers",
    slug: "Headers",
    url: "/ui/headers",
  },
  {
    heading: "UI",
    name: "Buttons",
    slug: "ui-buttons",
    url: "/ui/buttons",
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
    name: "Input",
    slug: "inputs",
    url: "/component/inputs",
  },
].sort((a, b) => a.name.localeCompare(b.name));
