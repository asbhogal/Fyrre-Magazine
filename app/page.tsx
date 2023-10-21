import Authors from "@/components/Authors";
import Hero from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";
import LatestPodcasts from "@/components/LatestPodcasts";
import NewsTicker from "@/components/NewsTicker";
import PageTitle from "@/components/PageTitle";
import Subheading from "@/components/Subheading";
import PodcastContextProvider from "@/context/PodcastContext";

export default function Home() {
  return (
    <PodcastContextProvider limit={3}>
      <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-16 md:pt-8 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
        <PageTitle className="sr-only" imgSrc="/images/titles/Art&Life.svg">
          Art & Life
        </PageTitle>
        <NewsTicker />
        <LatestArticles />
        <Subheading className="text-subheading">Podcast</Subheading>
        <LatestPodcasts />
        <Subheading className="text-subheading">Authors</Subheading>
        <Authors />
      </main>
    </PodcastContextProvider>
  );
}
