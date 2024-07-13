import { CollectionConfig } from "payload";

export const CategoriesCollection: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
  ],
};
