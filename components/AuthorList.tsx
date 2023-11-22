import formatString from "@/app/functions/formatString";
import Link from "next/link";
import { ArticleType, getArticles } from "@/app/functions/getArticles";
import Image from "next/image";

export default async function AuthorsList() {
  const data: Array<ArticleType> = await getArticles();

  return (
    <div className="flex flex-col max-w-[95rem] w-full mx-auto py-8 lg:pt-24 lg:pb-48">
      {data.map((authors, index) => (
        <div key={authors.id}>
          <article className="flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16">
              <Image
                className="h-[9.375rem] w-[9.375rem]"
                src={authors.avatar}
                alt={authors.imgAlt}
                width={150}
                height={150}
              />
              <h2 className="heading3-title">{authors.author}</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-24">
              <div className="flex gap-2">
                <p className="font-semibold">Job</p>
                <p>{authors.job}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">City</p>
                <p>{authors.city}</p>
              </div>
              <Link
                className="flex gap-2"
                href={`authors/${formatString(authors.author)}`}
              >
                <span className="uppercase font-semibold">About</span>
                <img
                  src="/icons/ri_arrow-right-line.svg"
                  alt="An arrow pointing right"
                />
              </Link>
            </div>
          </article>
          {index < data.length - 1 && (
            <div className="border border-black my-6" />
          )}
        </div>
      ))}
    </div>
  );
}
