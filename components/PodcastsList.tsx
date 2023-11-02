"use client";

import { usePodcastContext } from "@/hooks/usePodcastContext";
import formatString from "@/app/functions/formatString";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

export default function PodcastsList() {
  const { data } = usePodcastContext();

  return (
    <div className="flex flex-col max-w-[95rem] w-full mx-auto py-12 md:py-48">
      {data.map((podcasts, index) => (
        <div key={podcasts.id}>
          <div className="grid grid-cols-1 md:grid-cols-[auto_auto] justify-between md:items-center gap-2 md:gap-0">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16">
              <p className="font-semibold">{podcasts.episode.slice(7)}</p>
              <img
                className="w-[15rem] h-[15rem]"
                src={podcasts.img}
                alt={podcasts.title}
              />
              <h2 className="heading3-title">{podcasts.title}</h2>
            </div>
            <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-2">
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
          {index < data.length - 1 && (
            <Separator className="border border-black my-6" />
          )}
        </div>
      ))}
    </div>
  );
}
