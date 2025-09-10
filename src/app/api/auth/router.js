export async function POST(req) {
  const { username, password } = await req.json();

  // Usuario fijo de ejemplo
  if (username === "admin" && password === "1234") {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  return new Response(JSON.stringify({ success: false, message: "Credenciales inválidas" }), { status: 401 });
}
