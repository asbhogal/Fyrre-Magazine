"use client";

import { useArticleContext } from "@/hooks/useArticleContext";
import Sidebar from "../Sidebar";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import Loading from "./loading";
import Image from "next/image";

export default function LatestArticles() {
  const { data } = useArticleContext();

  if (data.length > 0 && data[0].articles.length > 0) {
    const allArticles = data[0].articles.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    const latestArticle = allArticles[0];

    const remainingArticles = allArticles.slice(1);

    return (
      <>
        <div className="flex flex-col-reverse sm:flex-col gap-6 md:gap-12 py-6 md:py-10 max-w-[95rem] w-full mx-auto">
          <article className="flex flex-col-reverse sm:flex-col gap-6 md:gap-12">
            <article className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <h2 className="text-subtitle">
                <Link href={`/magazine/${latestArticle.slug}`}>
                  {latestArticle.title}
                </Link>
              </h2>
              <article className="flex flex-col justify-between gap-2">
                <p>{latestArticle.description}</p>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Text</p>
                      <p>{data[0].author}</p>
                    </span>
                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Date</p>
                      <time dateTime={data[0].articles[0].date}>
                        {data[0].articles[0].date}
                      </time>
                    </span>
                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Read</p>
                      <p>{data[0].articles[0].read}</p>
                    </span>
                  </div>
                  <span className="px-3 py-2 border border-black rounded-full w-fit">
                    <p className="uppercase">{data[0].articles[0].label}</p>
                  </span>
                </div>
              </article>
            </article>
            <div>
              <Image
                className="w-full object-cover aspect-[9/6]"
                src={latestArticle.content[0].img}
                alt={latestArticle.imgAlt}
                width={1488}
                height={992}
                priority
              />
            </div>
          </article>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 xl:gap-24">
          <div className="lg:w-3/4">
            {remainingArticles.map((article, index) => (
              <article key={article.title}>
                <article className="grid md:grid-cols-[0fr_1fr] gap-6 sm:gap-12">
                  <Link href={`magazine/${article.slug}`} className="h-60 w-60">
                    <Image
                      className="w-full h-full object-cover hover:scale-105 transition"
                      src={article.img}
                      alt={article.imgAlt}
                      width={240}
                      height={240}
                    />
                  </Link>
                  <article className="flex flex-col justify-between">
                    <div className="mb-4 :md:mb-0">
                      <h3 className="heading3-title mb-3">
                        <Link href={`/magazine/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p>{article.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                        <span className="flex flex-wrap">
                          <p className="font-semibold pr-2">Text</p>
                          <p>{data[0].author}</p>
                        </span>
                        <span className="flex flex-wrap">
                          <p className="font-semibold pr-2">Date</p>
                          <time dateTime={article.date}>{article.date}</time>
                        </span>
                        <span className="flex flex-wrap">
                          <p className="font-semibold pr-2">Read</p>
                          <p>{article.read}</p>
                        </span>
                      </div>
                      <span className="px-3 py-2 border border-black rounded-full w-fit">
                        <p className="uppercase">{article.label}</p>
                      </span>
                    </div>
                  </article>
                </article>
                {index < remainingArticles.length - 1 && (
                  <Separator className="border border-black my-6" />
                )}
              </article>
            ))}
          </div>
          <div className="lg:w-1/4">
            <Sidebar />
          </div>
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
}
