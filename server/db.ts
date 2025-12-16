import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@shared/schema";

// Force TypeScript to treat this as a string with "!"
const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql, { schema });