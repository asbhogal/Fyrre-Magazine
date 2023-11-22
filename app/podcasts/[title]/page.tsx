import { PodcastType, getPodcasts } from "@/app/functions/getPodcasts";
import LatestPodcasts from "@/components/LatestPodcasts/LatestPodcasts";
import PostNavigation from "@/components/PostNavigation";
import SocialSharing from "@/components/SocialSharing";
import PodcastContextProvider from "@/context/PodcastContext";

export async function generateMetadata({
  params,
}: {
  params: { title: string };
}) {
  const podcast: PodcastType[] = await getPodcasts();

  const podcastData = podcast.find(
    (podcast: PodcastType) => podcast.slug === params.title
  );

  if (!podcastData) {
    return <div>No matching podcast found</div>;
  }

  return {
    title: `${podcastData.title} | Fyrre Magazine`,
  };
}

export default async function PodcastDetails({
  params,
}: {
  params: { title: string };
}) {
  try {
    const podcast: PodcastType[] = await getPodcasts();

    const podcastData = podcast.find(
      (podcast: PodcastType) => podcast.slug === params.title
    );

    if (!podcastData) {
      return <div>No matching podcast found</div>;
    }

    return (
      <main className="max-w-[95rem] w-full mx-auto px-4 pb-12 sm:pt-4 xs:pt-2 md:pb-4 sm:pb-2 xs:pb-2">
        <PostNavigation href="/podcasts">Podcast</PostNavigation>
        <article className="max-w-[75rem] w-full mx-auto flex flex-wrap gap-24">
          <article className="flex flex-col lg:w-1/4">
            <img className="" src={podcastData.img} alt={podcastData.imgAlt} />
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
                <p className="font-semibold">Date</p>
                <time dateTime={podcastData.date}>{podcastData.date}</time>
              </div>
              <div className="flex flex-wrap justify-between">
                <p className="font-semibold">Duration</p>
                <p>{podcastData.duration}</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p className="flex font-semibold">Share</p>
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
          </article>

          <article className="flex flex-col flex-1 w-full">
            <p className="uppercase font-semibold">{podcastData.episode}</p>
            <h1 className="podcast-title">{podcastData.title}</h1>
            {podcastData.content.map((podcastItem, index) => (
              <div key={index}>
                <p className="text-blog-summary pt-8 pb-16">
                  {podcastItem.summary}
                </p>
                <p>{podcastItem.section1}</p>
                <div className="border-t-2 border-b-2 border-black my-6">
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
          </article>
        </article>
        <div className="pb-12 md:pb-48">
          <h2 className="text-blog-subheading border-t-2 border-black mt-[9.5rem] pt-12 pb-12 md:pb-24">
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
