"use client";

import { useArticleContext } from "@/hooks/useArticleContext";
import Link from "next/link";
import formatString from "@/app/functions/formatString";

export default function Authors() {
  const { data } = useArticleContext();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-48 max-w-[95rem] w-full mx-auto border border-black border-collapse">
      {data.map((article) => (
        <div
          className="flex flex-wrap items-center gap-8 md:gap-12 p-4 md:p-8 border border-black"
          key={article.id}
        >
          <Link href={`authors/${article.slug}`}>
            <img
              className="w-[9.375rem] h-[9.375rem] object-cover rounded-full hover:scale-105 transition"
              src={article.avatar}
              alt={`A picture of ${article.author}`}
            />
          </Link>
          <div>
            <p className="heading3-title mb-4">
              <Link href={`/authors/${article.author}`}>{article.author}</Link>
            </p>
            <div className="flex gap-8">
              <span className="flex">
                <p className="font-semibold pr-2">Job</p>
                <p className="">{article.job}</p>
              </span>
              <span className="flex">
                <p className="font-semibold pr-2">City</p>
                <p className="">{article.city}</p>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
