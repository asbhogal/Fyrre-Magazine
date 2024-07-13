import { CollectionConfig } from "payload";

export const UsersCollection: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    delete: () => false,
    update: () => false,
  },
  fields: [
    {
      name: "email",
      type: "email",
      unique: true,
    },
    {
      name: "firstName",
      type: "text",
    },
    {
      name: "lastName",
      type: "text",
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "role",
      type: "select",
      options: ["Admin", "Author", "Subscriber"],
    },
  ],
};
