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
    heading: "UI",
    name: "Layouts",
    slug: "ui-layouts",
    url: "/ui/layouts",
  },
  {
    heading: "components",
    name: "Button",
    slug: "component-button",
    url: "/component/button",
  },
  {
    heading: "components",
    name: "Key Filter",
    slug: "component-key-filter",
    url: "/component/keyfilters",
  },

  {
    heading: "components",
    name: "Input",
    slug: "component-inputs",
    url: "/component/input",
  },
  {
    heading: "components",
    name: "Textarea",
    slug: "component-textarea",
    url: "/component/textarea",
  },
].sort((a, b) => a.name.localeCompare(b.name));
