import path from "path";
import { en } from "payload/i18n/en";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { CategoriesCollection } from "./collections/Categories";
import { PostsCollection } from "./collections/Posts";
import { UsersCollection } from "./collections/Users";
import { PagesCollection } from "./collections/Pages";
import { MediaCollection } from "./collections/Media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
  throw new Error("Both ADMIN_EMAIL and ADMIN_PASSWORD must be set.");
}

export default buildConfig({
  editor: lexicalEditor(),
  collections: [
    CategoriesCollection,
    PostsCollection,
    UsersCollection,
    PagesCollection,
    MediaCollection,
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI,
    },
  }),
  i18n: {
    supportedLanguages: { en },
  },
  admin: {
    autoLogin: {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      prefillOnly: true,
    },
    livePreview: {
      url: "http://localhost:3000",
      collections: ["pages"],
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: "users",
      limit: 1,
    });

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: "users",
        data: {
          email: "dev@payloadcms.com",
          password: "test",
        },
      });
    }
  },
  sharp,
});
