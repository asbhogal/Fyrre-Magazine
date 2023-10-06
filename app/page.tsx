import Hero from "@/components/Hero";
import LatestPodcasts from "@/components/LatestPodcasts";
import NewsTicker from "@/components/NewsTicker";
import PageTitle from "@/components/PageTitle";
import Podcasts from "@/components/Podcasts";
import Subheading from "@/components/Subheading";
import PodcastContextProvider from "@/context/PodcastContext";

export default function Home() {
  return (
    <PodcastContextProvider limit={3}>
      <main className="flex min-h-screen max-w-[105rem] w-full mx-auto flex-col px-4 lg:px-8">
        <PageTitle className="sr-only" imgSrc="/images/titles/Art&Life.svg">
          Art & Life
        </PageTitle>
        <NewsTicker />
        <Hero />
        <Subheading className="text-subheading">Podcast</Subheading>
        {/* <Podcasts
          showImg
          showTitle
          showDate
          showDuration
          customTitleClasses="heading3-title pt-2 pb-3"
          customPodcastContainerClasses="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3"
          customPodcastCardClasses="p-12"
        /> */}
        <LatestPodcasts />
      </main>
    </PodcastContextProvider>
  );
}
