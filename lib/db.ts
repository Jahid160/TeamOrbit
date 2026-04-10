// lib/db.ts
import { PrismaClient } from "@prisma/client";

const globalForDb = global as unknown as { prisma: PrismaClient };

export const db =
  globalForDb.prisma ||
  new PrismaClient({
    // Explicitly pass the URL here for the application to use
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

if (process.env.NODE_ENV !== "production") globalForDb.prisma = db;
