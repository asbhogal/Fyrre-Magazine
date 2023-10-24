import { useArticleContext } from "@/hooks/useArticleContext";

export default function PopularArticles() {
  const { data } = useArticleContext();

  const popularArticles = data.flatMap((author) =>
    author.articles
      .filter((article) => article.popular === true)
      .sort((a, b) => {
        const popularityA = Number(a.popularity);
        const popularityB = Number(b.popularity);

        return popularityB - popularityA;
      })
  );

  return (
    <div>
      {popularArticles.map((article) => (
        <div className="grid grid-cols-[0.1fr_1fr] gap-8" key={article.title}>
          <p className="text-2xl font-semibold">{article.popularity}</p>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold">{article.title}</p>
            <span className="flex gap-2">
              <p className="font-semibold">Text</p>
              <p>Cristopher Vaccaro</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
