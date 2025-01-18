export async function GET() {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
  };

  try {
    const proxyAddress =
      "npub12ucpp6c0g070cffu9z2c9rfsha5nnvzk8p8ze3ny3aqqj6k2aa8q0c52sm@npub.cash";

    // Fetch the LNURL pay data from the proxy service
    const response = await fetch(
      `https://npub.cash/.well-known/lnurlp/${proxyAddress.split("@")[0]}`
    );
    const proxyData = await response.json();

    return new Response(
      JSON.stringify({
        status: "OK",
        tag: "payRequest",
        callback: proxyData.callback,
        minSendable: proxyData.minSendable,
        maxSendable: proxyData.maxSendable,
        metadata: JSON.stringify([
          ["text/plain", "Zap for sats@unsigned.in"],
          ["text/identifier", "sats@unsigned.in"],
        ]),
        commentAllowed: proxyData.commentAllowed || 255,
        nostrPubkey: proxyData.nostrPubkey,
        allowsNostr: true,
      }),
      {
        status: 200,
        headers,
      }
    );
  } catch (error) {
    console.error("Error fetching proxy data:", error);
    return new Response(
      JSON.stringify({
        status: "ERROR",
        reason: "Failed to fetch proxy data",
      }),
      {
        status: 500,
        headers,
      }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
