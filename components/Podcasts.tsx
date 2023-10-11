"use client";

import { usePodcastContext } from "@/hooks/usePodcastContext";
import Link from "next/link";
import formatString from "@/app/functions/formatString";
import { Separator } from "@radix-ui/react-separator";

export default function Podcasts() {
  const { data } = usePodcastContext();

  return (
    <div className="flex flex-col gap-12 max-w-[95rem] w-full mx-auto">
      {data.map((podcasts, index) => (
        <div
          className="flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0"
          key={podcasts.id}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16">
            <p className="font-semibold">{podcasts.episode.slice(7)}</p>
            <img
              className="w-[15rem] h-[15rem]"
              src={podcasts.img}
              alt={podcasts.title}
            />
            <h2 className="heading3-title">{podcasts.title}</h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-2 lg:gap-16">
            <p>{podcasts.date}</p>
            <p>{podcasts.duration}</p>
            <Link
              className="flex gap-2"
              href={`podcasts/${formatString(podcasts.title)}`}
            >
              <span className="uppercase font-semibold">Listen</span>
              <img
                src="/icons/ri_arrow-right-line.svg"
                alt="An arrow pointing right"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
