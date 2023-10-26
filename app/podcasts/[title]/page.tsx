import { PodcastType } from "@/app/functions/getPodcasts";
import LatestPodcasts from "@/components/LatestPodcasts";
import PostNavigation from "@/components/PostNavigation";
import SocialSharing from "@/components/SocialSharing";
import PodcastContextProvider from "@/context/PodcastContext";

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
      <main className="max-w-[95rem] w-full mx-auto px-4 pb-12 md:pt-8 sm:pt-4 xs:pt-2 md:pb-4 sm:pb-2 xs:pb-2">
        <PostNavigation>Podcast</PostNavigation>
        <div className="max-w-[75rem] w-full mx-auto flex flex-wrap gap-24">
          <div className="flex flex-col lg:w-1/4">
            <img className="" src={podcastData.img} alt={podcastData.title} />
            <div className="flex justify-between mt-8 pb-12 border-b border-black">
              <p className="text-xl font-semibold">Listen On</p>
              <SocialSharing
                links={[
                  {
                    href: "#",
                    ariaLabel: "Visit our Spotify page",
                    src: "/icons/ri_spotify-fill.svg",
                    alt: "Instagram logo",
                  },
                  {
                    href: "#",
                    ariaLabel: "Visit our Apple page",
                    src: "/icons/ri_apple-fill.svg",
                    alt: "Twitter logo",
                  },
                  {
                    href: "#",
                    ariaLabel: "Visit our Soundcloud page",
                    src: "/icons/ri_soundcloud-line.svg",
                    alt: "YouTube logo",
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <div className="flex flex-wrap justify-between">
                <p>Date</p>
                <p>{podcastData.date}</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p>Duration</p>
                <p>{podcastData.duration}</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p className="flex">Share</p>
                <SocialSharing
                  links={[
                    {
                      href: "#",
                      ariaLabel: "Visit our Instagram page",
                      src: "/icons/ri_instagram-line.svg",
                      alt: "Instagram logo",
                    },
                    {
                      href: "#",
                      ariaLabel: "Visit our Twitter page",
                      src: "/icons/ri_twitter-fill.svg",
                      alt: "Twitter logo",
                    },
                    {
                      href: "#",
                      ariaLabel: "Visit our YouTube page",
                      src: "/icons/ri_youtube-fill.svg",
                      alt: "YouTube logo",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 w-full">
            <p className="uppercase font-semibold">{podcastData.episode}</p>
            <h1 className="podcast-title">{podcastData.title}</h1>
            {podcastData.content.map((podcastItem, index) => (
              <div key={index}>
                <p className="text-blog-summary pt-8 pb-16">
                  {podcastItem.summary}
                </p>
                <p>{podcastItem.section1}</p>
                <div className="border-t border-b border-black my-6">
                  <div className="py-12">
                    <p className="text-blog-quote pb-6">
                      &ldquo;{podcastItem.quote[0]}
                    </p>
                    <p> {podcastItem.quote[1]}</p>
                  </div>
                </div>
                <p>{podcastItem.section2}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-12 md:pb-48">
          <h2 className="text-blog-subheading border-t border-black mt-[9.5rem] pt-12 pb-12 md:pb-24">
            Latest Episodes
          </h2>
          <PodcastContextProvider limit={3}>
            <LatestPodcasts />
          </PodcastContextProvider>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error in PodcastDetails component:", error);
    return <div>Error loading podcast details</div>;
  }
}
