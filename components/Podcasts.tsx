"use client";

import { usePodcastContext } from "@/context/PodcastContext";

export default function Articles() {
  const { data, setData } = usePodcastContext();
  return <div>{JSON.stringify(data)}</div>;
}
