"use client";

import { usePodcastContext } from "@/hooks/usePodcastContext";
import Link from "next/link";

export default function LatestPodcasts() {
  const { data } = usePodcastContext();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3">
      {data.map((podcast) => (
        <div className="border border-black p-12" key={podcast.id}>
          <Link href={`podcasts/${podcast.title}`}>
            <img src={podcast.img} alt={podcast.title} />
          </Link>
          <Link href={`podcasts/${podcast.title}`}>
            <h2 className="heading3-title mt-8 mb-12">{podcast.title}</h2>
          </Link>
          <div className="flex flex-wrap gap-4">
            <div>
              <span className="flex">
                <p className="font-semibold pr-2">Date</p>
                <p className="">{podcast.date}</p>
              </span>
            </div>
            <div>
              <span className="flex">
                <p className="font-semibold pr-2">Duration</p>
                <p className="">{podcast.duration}</p>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
