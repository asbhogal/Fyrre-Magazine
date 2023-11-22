export type PodcastType = {
  id: number;
  title: string;
  img: string;
  imgAlt: string;
  date: string;
  duration: string;
  episode: string;
  slug: string;
  content: {
    summary: string;
    section1: string;
    quote: [string, string];
    section2: string;
  }[];
};

export async function getPodcasts(): Promise<PodcastType[]> {
  const res = await fetch(
    "https://raw.githubusercontent.com/asbhogal/Fyrre-Magazine/main/json/podcasts.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch podcast data");
  }

  return res.json();
}
