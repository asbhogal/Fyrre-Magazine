import { PodcastType } from "@/app/functions/getPodcasts";

export const revalidate = 10;

async function getPodcastDetails() {
  const res = await fetch(
    "https://raw.githubusercontent.com/asbhogal/Fyrre-Magazine/main/json/podcasts.json",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch podcast data");
  }

  return res.json() as Promise<PodcastType[]>;
}

export default async function PodcastDetails({
  params,
}: {
  params: { title: string };
}) {
  return <div>test</div>;
}
