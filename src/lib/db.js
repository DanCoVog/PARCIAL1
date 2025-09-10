// lib/db.js
import { Pool } from "pg";
 
const pool = new Pool({
  user: process.env.PGUSER,       // usuario de la db
  host: process.env.PGHOST,       // host (localhost o remoto)
  database: process.env.PGDATABASE, // nombre de la db
  password: process.env.PGPASSWORD, // contraseña
  port: process.env.PGPORT,         // puerto (5432 por defecto)
});
 // Probar conexión apenas se cree el pool
pool.connect()
  .then(client => {
    console.log("✅ Conectado exitosamente a PostgreSQL");
    client.release(); // liberar el cliente al pool
  })
  .catch(err => {
    console.error("❌ Error al conectar a PostgreSQL:", err.message);
  });
export default pool;
