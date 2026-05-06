// prisma.config.ts
import { defineConfig } from "@prisma/config";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.DATABASE_URL) {
  console.error("❌ Error: DATABASE_URL is not defined in your .env file!");
}

export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
