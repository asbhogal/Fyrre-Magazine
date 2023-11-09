import Authors from "@/components/Authors/Authors";
import LatestArticles from "@/components/LatestArticles/LatestArticles";
import NewsLoading from "@/components/NewsTicker/loading";
import LatestPodcasts from "@/components/LatestPodcasts/LatestPodcasts";
import LatestPodcastsLoading from "@/components/LatestPodcasts/loading";
import AuthorsLoading from "@/components/Authors/loading";
import NewsTicker from "@/components/NewsTicker/NewsTicker";
import PageTitle from "@/components/PageTitle";
import Subheading from "@/components/Subheading";
import { Suspense } from "react";

export const metadata = {
  title: "Fyrre Magazine | Art & Life | Home",
  description: "Articles, podcasts and news from the Berlin cultural scene",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle
        className="sr-only"
        imgSrc="/images/titles/Art&Life.svg"
        imgAlt="The words 'Art & Life' in bold uppercase lettering"
      >
        Art & Life
      </PageTitle>

      <Suspense fallback={<NewsLoading />}>
        <NewsTicker />
      </Suspense>

      <LatestArticles />

      <Subheading
        className="text-subheading"
        url="/podcasts"
        linkText="All episodes"
      >
        Podcast
      </Subheading>

      <Suspense fallback={<LatestPodcastsLoading />}>
        <LatestPodcasts />
      </Suspense>

      <Subheading
        className="text-subheading"
        url="/authors"
        linkText="All authors"
      >
        Authors
      </Subheading>

      <Suspense fallback={<AuthorsLoading />}>
        <Authors />
      </Suspense>
    </main>
  );
}
