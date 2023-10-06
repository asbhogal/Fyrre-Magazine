"use client";

import { useArticleContext } from "@/hooks/useArticleContext";

export default function Articles() {
  const { data } = useArticleContext();

  return (
    <div className="max-w-[95rem] w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black">
        {data.map((article) =>
          article.articles.map((articleData, index) => (
            <div className="border border-black p-8" key={index}>
              <div className="flex justify-between">
                <p>{articleData.date}</p>
                <p>{articleData.label}</p>
              </div>
              <img
                className="w-full"
                src={articleData.img}
                alt={articleData.title}
              />
              <h2 className="heading3-title">{articleData.title}</h2>
              <p>{articleData.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
