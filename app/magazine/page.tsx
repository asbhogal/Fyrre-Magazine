import Articles from "@/components/Articles";
import PageTitle from "@/components/PageTitle";

export default function MagazinePage() {
  return (
    <main className="flex min-h-screen flex-col px-4 lg:px-8">
      <PageTitle className="sr-only" imgSrc="/images/titles/Magazine.svg">
        Magazine
      </PageTitle>
      <Articles />
    </main>
  );
}
