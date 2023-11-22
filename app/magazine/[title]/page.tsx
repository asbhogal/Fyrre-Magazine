import { ArticleType, getArticles } from "@/app/functions/getArticles";
import PostNavigation from "@/components/PostNavigation";
import SocialSharing from "@/components/SocialSharing";
import Subheading from "@/components/Subheading";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { title: string };
}) {
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

  return {
    title: `${matchingArticle?.title} | Fyrre Magazine`,
  };
}

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

    const latestArticles = articles
      .flatMap((articleData) => articleData.articles)
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      })
      .slice(0, 3);

    if (!matchingArticle) {
      return (
        <main className="max-w-[95rem] w-full mx-auto px-4 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
          <p>Article not found</p>;
        </main>
      );
    }

    return (
      <main className="max-w-[95rem] w-full mx-auto px-4 md:pt-8 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
        <PostNavigation href="/magazine">Magazine</PostNavigation>
        <article className="grid md:grid-cols-2 gap-6 md:gap-6 pb-6 md:pb-24">
          <h2 className="text-subtitle">{matchingArticle.title}</h2>
          <p>{matchingArticle.description}</p>
        </article>
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 mb-8">
          <div className="flex flex-col sm:flex-row md:items-center gap-2 sm:gap-6">
            <span className="flex flex-wrap">
              <p className="font-semibold pr-2">Text</p>
              <p>{articleData.author}</p>
            </span>
            <span className="flex flex-wrap">
              <p className="font-semibold pr-2">Date</p>
              <time dateTime={matchingArticle.date}>
                {matchingArticle.date}
              </time>
            </span>
            <span className="flex flex-wrap">
              <p className="font-semibold pr-2">Read</p>
              <p>{matchingArticle.read}</p>
            </span>
          </div>
          <span className="px-3 py-2 border border-black rounded-full w-fit">
            <p className="uppercase">{matchingArticle.label}</p>
          </span>
        </div>

        <div>
          <img
            src={matchingArticle.content[0].img}
            alt={matchingArticle.imgAlt}
          />
        </div>

        <article className="flex flex-col md:flex-row gap-6 md:gap-16 max-w-[62.5rem] w-full mx-auto mt-6 md:mt-24">
          {/*  <h2 className="sr-only">{matchingArticle.title}</h2> */}
          <div className="flex flex-col w-fit">
            <div className="flex gap-4 items-center">
              <img
                className="w-[5rem] h-[5rem]"
                src={articleData.avatar}
                alt={articleData.imgAlt}
              />
              <p className="text-[2rem] font-semibold">{articleData.author}</p>
            </div>

            <div className="flex flex-col gap-4 pt-8">
              <div className="flex flex-wrap justify-between">
                <p className="font-semibold">Date</p>
                <time dateTime={matchingArticle.date}>
                  {matchingArticle.date}
                </time>
              </div>
              <div className="flex flex-wrap justify-between">
                <p className="font-semibold">Read</p>
                <p>{matchingArticle.read}</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p className="flex font-semibold">Share</p>
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
            <div className="border-t-2 border-b-2 border-black my-6 py-12">
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
        </article>

        <div>
          <Subheading
            className="text-subheading"
            url="/magazine"
            linkText="See all"
          >
            Latest Posts
          </Subheading>
          {latestArticles.map((latestArticles) => (
            <div key={latestArticles.slug}>
              <p></p>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black border-collapse mb-12 md:mb-48">
            {latestArticles.map((latestArticle) => (
              <article
                className="border border-black p-8"
                key={latestArticle.slug}
              >
                <div className="flex items-center justify-between">
                  <time dateTime={latestArticle.date}>
                    {latestArticle.date}
                  </time>
                  <span className="px-3 py-2 border border-black rounded-full">
                    <p className="uppercase">{latestArticle.label}</p>
                  </span>
                </div>
                <Link href={`/magazine/${latestArticle.slug}`}>
                  <img
                    className="w-full my-8"
                    src={latestArticle.img}
                    alt={latestArticle.imgAlt}
                  />
                </Link>
                <h2 className="heading3-title mb-3">
                  <Link href={`/magazine/${latestArticle.slug}`}>
                    {latestArticle.title}
                  </Link>
                </h2>
                <p className="mt-3 mb-12">{latestArticle.description}</p>
                <div className="flex flex-wrap gap-4">
                  <span className="flex">
                    <p className="font-semibold pr-2">Text</p>
                    <p>{articleData.author}</p>
                  </span>
                  <span className="flex">
                    <p className="font-semibold pr-2">Duration</p>
                    <p>{latestArticle.read}</p>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching article details:", error);
    return <p>Error fetching article details</p>;
  }
}
