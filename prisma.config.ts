// prisma.config.ts
import { defineConfig } from "@prisma/config";
import * as dotenv from "dotenv";

// Manually load the .env file so process.env.DATABASE_URL isn't undefined
dotenv.config();

export default defineConfig({
  schema: "./prisma/schema.prisma",
});
