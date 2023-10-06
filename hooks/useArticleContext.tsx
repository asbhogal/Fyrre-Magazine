import { createContext, useContext } from "react";
import { ArticleType } from "@/app/functions/getArticles";

type ArticleContextType = {
  data: ArticleType[];
};

export const ArticleContext = createContext<ArticleContextType | null>(null);

export function useArticleContext() {
  const articleContext = useContext(ArticleContext);

  if (!articleContext) {
    throw new Error(
      "useArticleContext must be used within an ArticleContextProvider"
    );
  }

  return articleContext;
}
