"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getPodcasts, PodcastType } from "@/functions/getPodcasts";

type PodcastContextProviderType = {
  children: React.ReactNode;
};

type PodcastContextType = {
  data: PodcastType[];
  setData: React.Dispatch<React.SetStateAction<PodcastType[]>>;
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
    <PodcastContext.Provider value={{ data, setData }}>
      {children}
    </PodcastContext.Provider>
  );
}

export function usePodcastContext() {
  const podcastContext = useContext(PodcastContext);

  if (!podcastContext) {
    throw new Error(
      "usePodcastContext must be used within a PodcastContextProvider"
    );
  }

  return podcastContext;
}
