db.js 
import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",       // 👈 tu usuario de postgres
  host: "localhost",      // 👈 host (si estás en local)
  database: "parcial",    // 👈 tu base de datos
  password: "1234",       // 👈 tu password
  port: 5432,             // 👈 puerto por defecto de PostgreSQL
});

export default pool;