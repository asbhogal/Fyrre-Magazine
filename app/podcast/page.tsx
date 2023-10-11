import PageTitle from "@/components/PageTitle";
import Podcasts from "@/components/Podcasts";
import PodcastContextProvider from "@/context/PodcastContext";

export default function PodcastsPage() {
  return (
    <PodcastContextProvider>
      <main className="flex min-h-screen flex-col px-4 lg:px-8">
        <PageTitle className="sr-only" imgSrc="/images/titles/Podcast.svg">
          Podcast
        </PageTitle>
        <Podcasts />
      </main>
    </PodcastContextProvider>
  );
}
