import { useArticleContext } from "@/hooks/useArticleContext";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

export default function PopularArticles() {
  const { data } = useArticleContext();

  const popularArticles = data.flatMap((author) =>
    author.articles
      .filter((article) => article.popular === true)
      .sort((a, b) => Number(a.popularity) - Number(b.popularity))
  );

  return (
    <article>
      <h2 className="uppercase font-semibold mt-16 mb-8">Most Popular</h2>
      {popularArticles.map((article, index) => (
        <article key={article.title}>
          <div className="grid grid-cols-[0fr_1fr] gap-8">
            <p className="text-2xl font-semibold">{`0${index + 1}`}</p>
            <article className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">
                <Link href={`/magazine/${article.slug}`}>{article.title}</Link>
              </h3>
              <span className="flex gap-2">
                <p className="font-semibold">Text</p>
                <p>{data[0].author}</p>
              </span>
            </article>
          </div>
          {index < popularArticles.length - 1 && (
            <Separator className="border border-black my-6" />
          )}
        </article>
      ))}
    </article>
  );
}
