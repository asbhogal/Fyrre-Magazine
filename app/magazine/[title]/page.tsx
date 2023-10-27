import { ArticleType, getArticles } from "@/app/functions/getArticles";
import SocialSharing from "@/components/SocialSharing";

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
        <div className="grid md:grid-cols-2 gap-6 md:gap-0 pb-6 md:pb-24">
          <h2 className="text-subtitle">{matchingArticle.title}</h2>
          <p>{matchingArticle.description}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 mb-8">
          <div className="flex md:items-center gap-6">
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
          <span className="px-3 py-2 border border-black rounded-full w-fit">
            <p>{matchingArticle.label}</p>
          </span>
        </div>

        <div>
          <img
            src={matchingArticle.content[0].img}
            alt={matchingArticle.title}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-16 max-w-[62.5rem] w-full mx-auto mt-6 md:mt-24">
          <div className="flex flex-col w-fit">
            <div className="flex gap-4 items-center">
              <img
                className="w-[5rem] h-[5rem]"
                src={articleData.avatar}
                alt={articleData.author}
              />
              <p className="text-[2rem] font-semibold">{articleData.author}</p>
            </div>

            <div className="flex flex-col gap-4 pt-8">
              <div className="flex flex-wrap justify-between">
                <p>Date</p>
                <p>{matchingArticle.date}</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p>Read</p>
                <p>{matchingArticle.read}</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p className="flex">Share</p>
                <SocialSharing
                  links={[
                    {
                      href: "#",
                      ariaLabel: "Visit our Instagram page",
                      src: "/icons/ri_instagram-line.svg",
                      alt: "Instagram logo",
                    },
                    {
                      href: "#",
                      ariaLabel: "Visit our Twitter page",
                      src: "/icons/ri_twitter-fill.svg",
                      alt: "Twitter logo",
                    },
                    {
                      href: "#",
                      ariaLabel: "Visit our YouTube page",
                      src: "/icons/ri_youtube-fill.svg",
                      alt: "YouTube logo",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="lg:w-3/4">
            <p className="text-xl font-medium">
              {matchingArticle.content[0].summary}
            </p>
            <p className="my-6">{matchingArticle.content[1].section1}</p>
            <div className="border-t border-b border-black my-6 py-12">
              <p className="text-blog-quote mb-6">
                &ldquo;{matchingArticle.content[2].quote[0]}
              </p>
              <p>{matchingArticle.content[2].quote[1]}</p>
            </div>
            <p className="text-xl font-medium mb-6">
              {matchingArticle.content[3].summary2}
            </p>
            <p>{matchingArticle.content[4].section2}</p>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching article details:", error);
    return <p>Error fetching article details</p>;
  }
}

function LatestArticles() {
  return <LatestArticles />;
}
