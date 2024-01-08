"use client";

import { ArticlesType } from "@/lib/types/articles/types";
import { Button } from "./ui/button";

export default function ArticleFilterButtons({ articles }: ArticlesType) {
  const labels = [
    "All",
    ...new Set(
      articles.flatMap((article) => article.articles.map((item) => item.label))
    ),
  ];

  console.log(labels);
  return (
    <>
      {articles && (
        <div className="flex gap-2">
          {labels.map((label, index) => (
            <Button
              className="px-3 py-2 bg-white text-black hover:bg-black hover:text-white border border-black rounded-full"
              key={index}
            >
              {label}
            </Button>
          ))}
        </div>
      )}
    </>
  );
}
