import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@shared/schema";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL && process.env.NODE_ENV === "production") {
  throw new Error("DATABASE_URL must be set");
}


const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
