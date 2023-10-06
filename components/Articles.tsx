"use client";

import { useArticleContext } from "@/hooks/useArticleContext";

export default function Articles() {
  const { data } = useArticleContext();

  return (
    <div className="max-w-[95rem] w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black pb-48">
        {data.map((article) =>
          article.articles.map((articleData, index) => (
            <div className="border border-black p-8" key={index}>
              <div className="flex items-center justify-between">
                <p>{articleData.date}</p>
                <span className="px-3 py-2 border border-black rounded-full">
                  <p className="uppercase">{articleData.label}</p>
                </span>
              </div>
              <img
                className="w-full py-8"
                src={articleData.img}
                alt={articleData.title}
              />
              <h2 className="heading3-title pb-3">{articleData.title}</h2>
              <p className="pt-3 pb-12">{articleData.description}</p>
              <div className="flex flex-wrap gap-4">
                <span className="flex">
                  <p className="font-semibold pr-2">Text</p>
                  <p>{article.author}</p>
                </span>
                <span className="flex">
                  <p className="font-semibold pr-2">Duration</p>
                  <p>{articleData.read}</p>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
