import { ArticleType, getArticles } from "@/app/functions/getArticles";

export const revalidate = 10;

/* async function getArticleDetails() {
  const res = await fetch(
    "https://raw.githubusercontent.com/asbhogal/Fyrre-Magazine/main/json/articles.json",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch article data");
  }

  return res.json() as Promise<ArticleType[]>;
} */

export default async function ArticleDetails({
  params,
}: {
  params: { title: string };
}) {
  console.log(params);
  try {
    const articles: ArticleType[] = await getArticles();

    const articleData = articles.find((article) =>
      article.articles.find((articleItem) => articleItem.slug === params.title)
    );

    if (!articleData) {
      return <p>Article not found</p>;
    }

    const matchingArticle = articleData.articles.find(
      (articleItem) => articleItem.slug === params.title
    );

    if (!matchingArticle) {
      return <p>Article not found</p>;
    }

    return (
      <main className="max-w-[95rem] w-full mx-auto px-4 lg:pt-16 md:pt-8 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
        <div className="grid md:grid-cols-2 pb-24">
          <h2 className="text-subtitle">{matchingArticle.title}</h2>
          <p>{matchingArticle.description}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-center gap-6">
            <span className="flex flex-wrap">
              <p className="font-semibold pr-2">Text</p>
              <p>{articleData.author}</p>
            </span>
            <span className="flex flex-wrap">
              <p className="font-semibold pr-2">Date</p>
              <p>{matchingArticle.date}</p>
            </span>
            <span className="flex flex-wrap">
              <p className="font-semibold pr-2">Read</p>
              <p>{matchingArticle.read}</p>
            </span>
          </div>
          <span className="px-3 py-2 border border-black rounded-full">
            <p>{matchingArticle.label}</p>
          </span>
        </div>

        <div>
          <img
            src={matchingArticle.content[0].img}
            alt={matchingArticle.title}
          />
          <p>{matchingArticle.content[0].summary}</p>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching article details:", error);
    return <p>Error fetching article details</p>;
  }
}
