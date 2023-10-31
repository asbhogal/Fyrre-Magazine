import Articles from "@/components/Articles";
import PageTitle from "@/components/PageTitle";

export const metadata = {
  title: "Articles  | Fyrre Magazine",
  description: "Articles from our team of writers, editors and artists",
};

export default function MagazinePage() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 md:pt-8 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle
        className="sr-only"
        imgSrc="/images/titles/Magazine.svg"
        imgAlt="The word 'Magazine' in bold, uppercase lettering"
      >
        Magazine
      </PageTitle>
      <Articles />
    </main>
  );
}
