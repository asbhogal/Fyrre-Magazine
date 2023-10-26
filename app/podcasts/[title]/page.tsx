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
  try {
    const podcast: PodcastType[] = await getPodcastDetails();

    const podcastData = podcast.find(
      (podcast: PodcastType) => podcast.slug === params.title
    );

    console.log(podcast[0].title);
    if (!podcastData) {
      return <div>No matching podcast found</div>;
    }

    return (
      <div className="max-w-[95rem] w-full mx-auto px-4 lg:pt-16 md:pt-8 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
        <h1>{podcastData.title}</h1>
        <img src={podcastData.img} alt={podcastData.title} />
      </div>
    );
  } catch (error) {
    console.error("Error in PodcastDetails component:", error);
    return <div>Error loading podcast details</div>;
  }
}
