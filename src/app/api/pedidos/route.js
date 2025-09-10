import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM pedidos");
    return new Response(JSON.stringify(result.rows), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { cliente, producto, cantidad } = await req.json();
    const result = await pool.query(
      "INSERT INTO pedidos (cliente, producto, cantidad, fecha) VALUES ($1, $2, $3, NOW()) RETURNING *",
      [cliente, producto, cantidad]
    );
    return new Response(JSON.stringify(result.rows[0]), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
