export async function getArticles() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/articles`);

  if (!res.ok) {
    throw new Error("Failed to fetch article data");
  }

  return res.json();
}
