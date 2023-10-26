"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

import news from "../json/news.json";

export default function NewsTicker() {
  console.log(news);

  const newsText = useRef<HTMLDivElement | null>(null);
  let tickerWidth = 0;
  let xPercent = 0;
  const animationDuration = 20;

  useEffect(() => {
    const ticker = newsText.current;

    if (ticker) {
      const tickerWidth = ticker.offsetWidth; // Moved tickerWidth inside useEffect

      gsap.set(ticker, { x: xPercent });

      const animation = gsap.to(ticker, {
        x: -tickerWidth,
        duration: animationDuration,
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          gsap.set(ticker, { x: 0 });
        },
      });

      return () => {
        animation.kill();
      };
    }
  }, [xPercent]);

  return (
    <div className="flex xs:gap-4 xs:flex-col sm:flex-row bg-black text-white py-5 max-w-[95rem] w-full mx-auto relative overflow-hidden">
      <div className="bg-black z-10 px-6">
        <p className="bg-black font-semibold uppercase whitespace-nowrap">
          News Ticker +++
        </p>
      </div>
      <div ref={newsText} className="flex gap-4 sliding-ticker relative">
        {news.map((newsItem, index) => (
          <div
            key={index}
            className={`whitespace-nowrap ${
              index === news.length - 1 ? "overflow-visible" : "overflow-hidden"
            }`}
            style={{ right: index === news.length - 1 ? "0" : "" }}
          >
            <p>{newsItem}+++</p>
          </div>
        ))}
      </div>
    </div>
  );
}
