import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import PageTitle from "@/components/PageTitle";
import Podcasts from "@/components/Podcasts";
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
        <Podcasts />
      </main>
    </PodcastContextProvider>
  );
}
