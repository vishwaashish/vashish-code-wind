import { NavigationModel } from "@/types/common.type";

export const navigation: NavigationModel[] = [
  {
    heading: "Get Started",
    name: "Tool Overview",
    slug: "development-tools-overview",
    url: "/docs/development-tools-overview",
  },
  // {
  //   heading: "Configuration",
  //   name: "Editor Configuration",
  //   slug: "editor-configuration",
  //   url: "/docs/editor-configuration",
  // },
  // {
  //   heading: "Configuration",
  //   name: "Eslint Configuration",
  //   slug: "eslint-configuration",
  //   url: "/docs/eslint-configuration",
  // },
  // {
  //   heading: "Configuration",
  //   name: "Prettier Configuration",
  //   slug: "prettier-configuration",
  //   url: "/docs/prettier-configuration",
  // },
  // ----
  {
    heading: "UI",
    name: "Inputs",
    slug: "ui-inputs",
    url: "/docs/ui/inputs",
  },
  {
    heading: "UI",
    name: "Loaders",
    slug: "Loaders",
    url: "/docs/ui/loaders",
  },
  {
    heading: "UI",
    name: "Headers",
    slug: "Headers",
    url: "/docs/ui/headers",
  },
  {
    heading: "UI",
    name: "Buttons",
    slug: "ui-buttons",
    url: "/docs/ui/buttons",
  },
  {
    heading: "UI",
    name: "Layouts",
    slug: "ui-layouts",
    url: "/docs/ui/layouts",
  },
  {
    heading: "UI",
    name: "Hamburgers",
    slug: "ui-hamburgers",
    url: "/docs/ui/hamburgers",
  },
  {
    heading: "components",
    name: "Marquee",
    slug: "component-marquee",
    url: "/docs/component/marquee",
  },
  {
    heading: "components",
    name: "Button",
    slug: "component-button",
    url: "/docs/component/button",
  },
  {
    heading: "components",
    name: "Key Filter",
    slug: "component-key-filter",
    url: "/docs/component/keyfilters",
  },

  {
    heading: "components",
    name: "Input",
    slug: "component-inputs",
    url: "/docs/component/input",
  },
  {
    heading: "components",
    name: "Textarea",
    slug: "component-textarea",
    url: "/docs/component/textarea",
  },
].sort((a, b) => a.name.localeCompare(b.name));
