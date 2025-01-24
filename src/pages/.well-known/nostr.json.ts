export async function GET() {
  return new Response(
    JSON.stringify({
      names: {
        basantagoswami: "46f6acdf9064234122fa080f5d9ef69573d791048e0b256630f8af296331b6e7",
        _: "573010eb0f43fcfc253c2895828d30bf6939b056384e2cc6648f40096acaef4e"
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
