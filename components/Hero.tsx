"use client";

import { useArticleContext } from "@/hooks/useArticleContext";

export default function Hero() {
  const { data } = useArticleContext();
  //const firstArticle = data[0].articles[0];

  console.log(data);

  return (
    <div className="flex flex-col gap-12 py-10 max-w-[95rem] w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="">
          <h2 className="text-subtitle">Don&apos;t close your eyes</h2>
        </div>
        <div className="">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
            felis bibendum ut. Porttitor leo a diam.
          </p>
          <div className="flex">
            <p>Text Jakob Gronberg</p>
            <p>Text Jakob Gronberg</p>
            <p>Text Jakob Gronberg</p>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-full object-cover"
          src="/images/homepage/dimitar-belchev-fRBpWLAcWIY-unsplash 1.jpg"
          alt="An abstract painting of three faces"
        />
      </div>
    </div>
  );
}
