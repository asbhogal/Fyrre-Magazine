"use client";

import { createContext, useEffect, useState } from "react";
import { getPodcasts, PodcastType } from "@/functions/getPodcasts";

type PodcastContextProviderType = {
  children: React.ReactNode;
};

type PodcastContextType = {
  data: PodcastType[];
};

const PodcastContext = createContext<PodcastContextType | null>(null);

export default function PodcastContextProvider({
  children,
}: PodcastContextProviderType) {
  const [data, setData] = useState<PodcastType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getPodcasts();
        setData(responseData);
        console.log("Fetched podcast data:", responseData);
      } catch (err) {
        console.log("Error fetching data", err);
      }
    };

    fetchData();
  }, []);

  return (
    <PodcastContext.Provider value={{ data }}>
      {children}
    </PodcastContext.Provider>
  );
}
