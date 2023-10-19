export type ArticleType = {
  id: number;
  author: string;
  job: string;
  city: string;
  avatar: string;
  slug: string;
  articles: Array<{
    title: string;
    description: string;
    date: string;
    read: string;
    label: string;
    img: string;
    content: Array<{
      img: string;
      summary: string;
      section1: string;
      quote: Array<string>;
      summary2: string;
      section2: string;
    }>;
  }>;
};

export async function getArticles() {
  const res = await fetch(
    "https://raw.githubusercontent.com/asbhogal/Fyrre-Magazine/main/json/articles.json",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch article data");
  }

  return res.json();
}
