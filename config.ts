import { NavigationModel } from "@/types/common.type";

export const navigation: NavigationModel[] = [
  {
    heading: "components",
    name: "Card",
    slug: "card",
    url: "/component/card",
  },
  {
    heading: "components",
    name: "Button",
    slug: "button",
    url: "/component/button",
  },
  {
    heading: "components",
    name: "Input",
    slug: "input",
    url: "/component/input",
  },
].sort((a, b) => a.name.localeCompare(b.name));
