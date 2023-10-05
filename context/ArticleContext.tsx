"use client";

import { createContext, useEffect, useState } from "react";
import { getArticles, ArticleType } from "@/app/functions/getArticles";

type ArticleContextProviderType = {
  children: React.ReactNode;
};

type ArticleContextType = {
  data: ArticleType[];
};

const ArticleContext = createContext<ArticleContextType | null>(null);

export default function ArticleContextProvider({
  children,
}: ArticleContextProviderType) {
  const [data, setData] = useState<ArticleType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getArticles();
        setData(responseData);
        console.log("Fetched article data:", responseData);
      } catch (err) {
        console.log("Error fetching data", err);
      }
    };

    fetchData();
  }, []);

  return (
    <ArticleContext.Provider value={{ data }}>
      {children}
    </ArticleContext.Provider>
  );
}
