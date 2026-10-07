export default async function fetchBrandData(brand: string) {
  const response = await fetch(
    "https://nllrteorwimpikdeezdi.supabase.co/functions/v1/fetch-brand-data",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: brand }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch company logo");
  }
  return response.json();
}
