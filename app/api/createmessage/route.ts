export async function POST(request: Request) {
  const message = "heyy";
  console.log(message);
  return new Response(JSON.stringify({ message }), {
    headers: { "Content-Type": "application/json" },
  });
}
