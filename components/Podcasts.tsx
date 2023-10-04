"use client";

import { usePodcastContext } from "@/context/PodcastContext";

type PodcastProps = {};

export default function Podcasts() {
  const { data } = usePodcastContext();
  return <div>{JSON.stringify(data)}</div>;
}
