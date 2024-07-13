import { CollectionConfig } from "payload";

export const PostsCollection: CollectionConfig = {
  slug: "posts",
  upload: true,
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
    },
    /* {
      name: "dayAndTime",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
          displayFormat: "yyyy-MM-dd HH:mm:ss",
          timeFormat: "HH:mm:ss",
        },
      },
    }, */
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
    },
  ],
};
