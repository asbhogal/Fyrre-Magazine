import PageTitle from "@/components/PageTitle";
import Loading from "@/components/PodcastsList/loading";
import PodcastsList from "@/components/PodcastsList/PodcastsList";
import { Suspense } from "react";

export const metadata = {
  title: "Podcasts  | Fyrre Magazine",
  description: "The latest podcasts list",
};

export default function PodcastsPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle
        className="sr-only"
        imgSrc="/images/titles/Podcast.svg"
        imgAlt="The word 'Podcast' in bold, uppercase lettering"
      >
        Podcast
      </PageTitle>
      <Suspense fallback={<Loading />}>
        <PodcastsList />
      </Suspense>
    </main>
  );
}
