export async function getPodcasts() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/podcasts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch podcast data");
  }

  return res.json();
}
