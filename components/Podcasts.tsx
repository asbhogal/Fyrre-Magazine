"use client";

import { usePodcastContext } from "@/context/PodcastContext";
import Link from "next/link";

type PodcastProps = {
  showTitle?: boolean;
  showImg?: boolean;
  showDate?: boolean;
  showDuration?: boolean;
  showContent?: boolean;
  customPodcastContainerClasses?: string;
  customTitleClasses?: string;
  customImgClasses?: string;
  customDateClasses?: string;
  customDurationClasses?: string;
};

export default function Podcasts({
  showTitle,
  showImg,
  showDate,
  showDuration,
  showContent,
  customPodcastContainerClasses,
  customTitleClasses,
  customImgClasses,
  customDateClasses,
  customDurationClasses,
}: PodcastProps) {
  const { data } = usePodcastContext();

  return (
    <div className={`${customPodcastContainerClasses}`}>
      {data.map((podcast) => (
        <Link href="#" key={podcast.id}>
          {showTitle && (
            <h2 className={` ${customTitleClasses}`}>{podcast.title}</h2>
          )}
          {showImg && (
            <img
              className={` ${customImgClasses}`}
              src={podcast.img}
              alt={podcast.title}
            />
          )}
          {showDate && (
            <p className={` ${customDateClasses}`}>{podcast.date}</p>
          )}
          {showDuration && (
            <p className={` ${customDurationClasses}`}>{podcast.duration}</p>
          )}
          {showContent && (
            <div>
              {podcast.content.map((section, index) => (
                <div key={index}>
                  <h2>{podcast.title}</h2>
                  <h3>{section.episode}</h3>
                  <p>{section.summary}</p>
                  <p>{section.section1}</p>
                  <p>{section.quote[0]}</p>
                  <p>{section.quote[1]}</p>
                  <p>{section.section2}</p>
                </div>
              ))}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
