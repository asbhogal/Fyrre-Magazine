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
  return (
    <div className="max-w-[95rem] w-full mx-auto px-4 lg:pt-16 md:pt-8 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      test
    </div>
  );
}
