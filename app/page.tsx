import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import PageTitle from "@/components/PageTitle";
import Podcasts from "@/components/Podcasts";
import Subheading from "@/components/Subheading";
import PodcastContextProvider from "@/context/PodcastContext";

export default function Home() {
  return (
    <PodcastContextProvider limit={3}>
      <main className="flex min-h-screen flex-col px-4 lg:px-8">
        <PageTitle className="sr-only" imgSrc="/images/titles/Art&Life.svg">
          Art & Life
        </PageTitle>
        <NewsTicker />
        <Hero />
        <Subheading>Podcast</Subheading>
        <Podcasts
          showTitle
          showImg
          showDate
          showDuration
          customPodcastContainerClasses="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3"
        />
      </main>
    </PodcastContextProvider>
  );
}
