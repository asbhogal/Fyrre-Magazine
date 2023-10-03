"use client";

import { createContext, useEffect, useState } from "react";

type PodcastContextProviderType = {
  children: React.ReactNode;
};

type PodcastContextType = {
  data: object[];
};

const PodcastContext = createContext<PodcastContextType | null>(null);

export default function PodcastContextProvider({
  children,
}: PodcastContextProviderType) {
  const [data, setData] = useState<object[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./data/podcasts.ts");
        if (res.ok) {
          const responseData = await res.json();
          setData(responseData);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (err) {
        console.log("Error fetching data", err);
      }
    };

    fetchData();
  }, []);

  return (
    <PodcastContext.Provider value={data}>{children}</PodcastContext.Provider>
  );
}
