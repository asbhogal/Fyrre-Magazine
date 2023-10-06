"use client";

import { useArticleContext } from "@/hooks/useArticleContext";

export default function Authors() {
  const { data } = useArticleContext();

  return (
    <div>
      {data.map((article) => (
        <div key={article.id}>
          <p>{article.author}</p>
        </div>
      ))}
    </div>
  );
}
