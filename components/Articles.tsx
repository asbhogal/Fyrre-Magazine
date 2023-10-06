"use client";

import { useArticleContext } from "@/hooks/useArticleContext";

export default function Articles() {
  const { data } = useArticleContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((article) => (
        <div key={article.id}>
          {article.articles.map((articleData, index) => (
            <div key={index}>
              <img src={articleData.img} alt={articleData.title} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
