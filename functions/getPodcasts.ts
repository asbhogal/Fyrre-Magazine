export default async function getPodcasts() {
  const res = await fetch("http://localhost:3000/data/podcasts.ts");

  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  return res.json();
}
