import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 md:pt-8 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <div>
        <PageTitle className="sr-only" imgSrc="/images/titles/NotFound.svg">
          Not Found
        </PageTitle>
        <h2>
          The page you&apos;re looking for does not exist. Click{" "}
          <Link className="font-semibold" href="/">
            here to return home
          </Link>
        </h2>
      </div>
    </main>
  );
}
