import news from "../json/news.json";

export default function NewsTicker() {
  console.log(news);
  return (
    <div className="flex bg-black text-white p-5 max-w-[95rem] w-full mx-auto relative">
      <span className="pr-6">
        <p className="font-semibold uppercase whitespace-nowrap">
          News Ticker +++
        </p>
      </span>
      <div className="flex gap-4 sliding-ticker relative">
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
