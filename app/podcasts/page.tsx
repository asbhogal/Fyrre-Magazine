import PageTitle from "@/components/PageTitle";
import PodcastsList from "@/components/PodcastsList";

export default function PodcastsPage() {
  return (
    <main className="flex min-h-screen flex-col px-4 lg:px-8">
      <PageTitle className="sr-only" imgSrc="/images/titles/Podcast.svg">
        Podcast
      </PageTitle>
      <PodcastsList />
    </main>
  );
}
