import Authors from "@/components/Authors";
import Hero from "@/components/Hero";
import LatestPodcasts from "@/components/LatestPodcasts";
import NewsTicker from "@/components/NewsTicker";
import PageTitle from "@/components/PageTitle";
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
        <LatestPodcasts />
        <Subheading className="text-subheading">Authors</Subheading>
        <Authors />
      </main>
    </PodcastContextProvider>
  );
}
