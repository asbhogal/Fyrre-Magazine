"use client";

import { useArticleContext } from "@/hooks/useArticleContext";
import { Button } from "./ui/button";

export default function ArticleFilterButtons() {
  const { data } = useArticleContext();
  return (
    <>
      {data &&
        data.map(
          (article) =>
            article.articles &&
            article.articles.map((articleData, index) => (
              <p key={index}>{articleData.label}</p>
            ))
        )}
    </>
  );
}
