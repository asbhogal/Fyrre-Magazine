import { createContext, useContext } from "react";
import { PodcastType } from "@/app/functions/getPodcasts";

type PodcastContextType = {
  data: PodcastType[];
  setData: React.Dispatch<React.SetStateAction<PodcastType[]>>;
};

export const PodcastContext = createContext<PodcastContextType | null>(null);

export function usePodcastContext() {
  const podcastContext = useContext(PodcastContext);

  if (!podcastContext) {
    throw new Error(
      "usePodcastContext must be used within a PodcastContextProvider"
    );
  }

  return podcastContext;
}
