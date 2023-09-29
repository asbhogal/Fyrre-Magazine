import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageTitle className="sr-only" imgSrc="/images/titles/Art&Life.svg">
        Art & Life
      </PageTitle>
      <NewsTicker />
      <Hero />
    </main>
  );
}
