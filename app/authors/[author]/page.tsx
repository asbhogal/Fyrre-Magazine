import formatString from "@/app/functions/formatString";
import PostNavigation from "@/components/PostNavigation";
import SocialSharing from "@/components/SocialSharing";
import Link from "next/link";

export const revalidate = 10;

type AuthorData = {
  author: string;
  job: string;
  city: string;
  avatar: string;
  slug: string;
  biography: {
    summary: string;
    body: string;
  };
  articles: ArticleData[];
};

type ArticleData = {
  title: string;
  img: string;
  date: string;
  read: string;
  label: string;
};

async function getAuthorDetails() {
  const res = await fetch(
    "https://raw.githubusercontent.com/asbhogal/Fyrre-Magazine/main/json/articles.json",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json() as Promise<AuthorData[]>;
}

export default async function AuthorDetails({
  params,
}: {
  params: { author: string };
}) {
  try {
    const authors: AuthorData[] = await getAuthorDetails();

    const decodedAuthor = decodeURIComponent(params.author);

    const authorData = authors.find(
      (author: AuthorData) => author.slug === decodedAuthor
    );

    if (authorData) {
      return (
        <div className="max-w-[95rem] w-full mx-auto px-4 lg:pt-16 md:pt-8 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
          <PostNavigation>Author</PostNavigation>
          <div className="max-w-[75rem] w-full mx-auto grid lg:grid-cols-[300px_680px] gap-8 md:gap-0 justify-around">
            <div className="w-fit">
              <img src={authorData.avatar} alt={authorData.author} />
              <div className="flex justify-between border-top border-t border-black mt-12">
                <p className="uppercase font-semibold text-lg">Follow</p>
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
            <div>
              <h1 className="text-subheading pb-8">{authorData.author}</h1>
              <p className="text-blog-summary pb-12">
                {authorData.biography.summary}
              </p>
              <p>{authorData.biography.body}</p>
            </div>
          </div>
          <div className="pb-12 md:pb-48">
            <h2 className="text-blog-subheading border border-black mt-[9.5rem] pt-12 pb-12 md:pb-24">
              Articles by {authorData.author}
            </h2>
            <AuthorArticles articles={authorData.articles} />
          </div>
        </div>
      );
    } else {
      return <p>Author not found</p>;
    }
  } catch (error) {
    console.error("Error fetching author details:", error);
    return <p>Error fetching author details</p>;
  }
}

function AuthorArticles({ articles }: { articles: ArticleData[] }) {
  return (
    <div className="grid md:grid-cols-2 border-collapse">
      {articles.map((article, index) => (
        <Link
          className="flex flex-wrap items-center gap-2 md:gap-12 p-8 border border-black"
          key={index}
          href={`/articles/${formatString(article.title)}`}
        >
          <img
            className="h-[9.375rem] w-[9.375rem]"
            src={article.img}
            alt={article.title}
          />
          <div>
            <p className="heading3-title pb-4">{article.title}</p>
            <div className="flex gap-8">
              <span className="flex">
                <p className="font-semibold pr-2">Job</p>
                <p className="">{article.date}</p>
              </span>
              <span className="flex">
                <p className="font-semibold pr-2">City</p>
                <p className="">{article.label}</p>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
