// contentlayer.config.ts
import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

const computedFields: ComputedFields<"UI" | "Components"> = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

const LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    type: { type: "string", description: "Type of the link (e.g., doc, api, external)" },
    url: { type: "string", description: "URL of the link" },
    label: { type: "string", required: false, description: "Optional label for the link" },
  },
}));
export const Components = defineDocumentType(() => ({
  name: "Components",
  filePathPattern: `component/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    links: {
      type: "list", // Indicates this is a list field
      of: LinksProperties, // Nested type for each item in the list
      required: false,
    },
    toc: {
      type: "boolean",
      default: true,
      required: false,
    },
  },
  computedFields,
}));
export const UI = defineDocumentType(() => ({
  name: "UI",
  filePathPattern: `ui/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    links: {
      type: "list", // Indicates this is a list field
      of: LinksProperties, // Nested type for each item in the list
      required: false,
    },
    toc: {
      type: "boolean",
      default: true,
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Components, UI],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
