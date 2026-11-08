import "dotenv/config";
import { Pool } from "pg";

const DB_URL = process.env.DB_URL ?? "";

const pool = new Pool({
  connectionString: DB_URL,
});

export default pool;
