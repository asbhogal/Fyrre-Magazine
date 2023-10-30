import ArticleFilterButtons from "@/components/ArticleFilterButtons";
import Articles from "@/components/Articles";
import PageTitle from "@/components/PageTitle";

export default function MagazinePage() {
  return (
    <main className="flex min-h-screen flex-col px-4 lg:px-8 max-w-[105rem] mx-auto w-full">
      <PageTitle className="sr-only" imgSrc="/images/titles/Magazine.svg">
        Magazine
      </PageTitle>
      <div className="flex justify-between items-center my-6">
        <p className="font-semibold uppercase">Categories</p>
        <ArticleFilterButtons />
      </div>
      <Articles />
    </main>
  );
}
