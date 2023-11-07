"use client";

import { usePodcastContext } from "@/hooks/usePodcastContext";
import Link from "next/link";
import LatestPodcastLoading from "./loading";

export default function LatestPodcasts() {
  const { data } = usePodcastContext();
  return (
    <LatestPodcastLoading />
    /* <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-3 max-w-[95rem] w-full mx-auto border border-black border-collapse">
      {data.map((podcast) => (
        <div className="border border-black p-4 md:p-12" key={podcast.id}>
          <Link href={`/podcasts/${podcast.slug}`}>
            <img
              className="hover:scale-105 transition"
              src={podcast.img}
              alt={podcast.imgAlt}
            />
          </Link>
          <h2 className="heading3-title mt-8 mb-12">
            <Link href={`/podcasts/${podcast.slug}`}>{podcast.title}</Link>
          </h2>
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
    </div> */
  );
}