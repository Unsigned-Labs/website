export async function GET() {
  return new Response(
    JSON.stringify({
      names: {
        basantagoswami: "46f6acdf9064234122fa080f5d9ef69573d791048e0b256630f8af296331b6e7",
      },
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
