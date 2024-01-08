export async function getNews() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/news`);

  if (!res.ok) {
    throw new Error("Failed to fetch news data");
  }

  return res.json();
}
