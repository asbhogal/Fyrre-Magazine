"use client";

import { useEffect, useState } from "react";
import { getPodcasts, PodcastType } from "@/app/functions/getPodcasts";
import { PodcastContext } from "@/hooks/usePodcastContext";

type PodcastContextProviderType = {
  children: React.ReactNode;
  limit?: number | null;
};

export default function PodcastContextProvider({
  children,
  limit = null,
}: PodcastContextProviderType) {
  const [data, setData] = useState<PodcastType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getPodcasts();
        const limitedData = limit ? responseData.slice(0, limit) : responseData;
        setData(limitedData);
      } catch (err) {
        console.log("Error fetching data", err);
      }
    };

    fetchData();
  }, [limit]);

  return (
    <PodcastContext.Provider value={{ data, setData }}>
      {children}
    </PodcastContext.Provider>
  );
}
