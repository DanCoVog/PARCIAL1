import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM clientes");
    return new Response(JSON.stringify(result.rows), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { nombre, email, telefono } = await req.json();
    const result = await pool.query(
      "INSERT INTO clientes (nombre, email, telefono) VALUES ($1, $2, $3) RETURNING *",
      [nombre, email, telefono]
    );
    return new Response(JSON.stringify(result.rows[0]), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
