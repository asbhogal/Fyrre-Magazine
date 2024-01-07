export async function getNews(): Promise<string[]> {
  const res = await fetch(
    "https://raw.githubusercontent.com/asbhogal/Fyrre-Magazine/main/json/news.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news data");
  }

  return res.json();
}
