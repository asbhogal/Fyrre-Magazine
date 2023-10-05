"use client";

import { usePodcastContext } from "@/context/PodcastContext";

type PodcastProps = {
  showTitle?: boolean;
  showImg?: boolean;
  showDate?: boolean;
  showDuration?: boolean;
  showContent?: boolean;
  showEpisode?: boolean;
  showEpisodeNumber?: boolean;
  customPodcastContainerClasses?: string;
  customPodcastCardClasses?: string;
  customTitleClasses?: string;
  customImgClasses?: string;
  customDateClasses?: string;
  customDurationClasses?: string;
  customEpisodeClasses?: string;
};

export default function Podcasts({
  showTitle,
  showImg,
  showDate,
  showDuration,
  showContent,
  showEpisode,
  showEpisodeNumber,
  customPodcastContainerClasses,
  customPodcastCardClasses,
  customTitleClasses,
  customImgClasses,
  customDateClasses,
  customDurationClasses,
  customEpisodeClasses,
}: PodcastProps) {
  const { data } = usePodcastContext();

  return (
    <div className={`${customPodcastContainerClasses}`}>
      {data.map((podcast) => (
        <div className={`${customPodcastCardClasses}`} key={podcast.id}>
          {(showEpisode || showEpisodeNumber) && (
            <p className={` ${customEpisodeClasses}`}>
              {showEpisodeNumber ? podcast.episode.slice(-2) : podcast.episode}
            </p>
          )}
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
                  <h3>{podcast.episode}</h3>
                  <p>{section.summary}</p>
                  <p>{section.section1}</p>
                  <p>{section.quote[0]}</p>
                  <p>{section.quote[1]}</p>
                  <p>{section.section2}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
