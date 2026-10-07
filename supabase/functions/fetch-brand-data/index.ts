const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:5173",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response("ok", {
        headers: corsHeaders,
      });
    }

    const { name } = await req.json();

    if (!name) {
      return new Response(
        JSON.stringify({ error: "Company name is required" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        },
      );
    }

    const secretKey = Deno.env.get("LOGO_DEV_SECRET_KEY");

    if (!secretKey) {
      return new Response(
        JSON.stringify({ error: "Logo API key is not configured" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        },
      );
    }

    const response = await fetch(
      `https://api.logo.dev/v2/brands?name=${encodeURIComponent(name)}`,
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      },
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  }
});