import PostNavigation from "@/components/PostNavigation";
import SocialSharing from "@/components/SocialSharing";

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
};

async function getAuthorDetails() {
  const res = await fetch(
    "https://raw.githubusercontent.com/asbhogal/Fyrre-Magazine/2eac71632cf6b13cfdc8b302ce0589ecf263c03c/json/articles.json"
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
        <div className="max-w-[95rem] w-full mx-auto">
          <PostNavigation>Author</PostNavigation>
          <div className="max-w-[1200px] w-full mx-auto grid md:grid-cols-2">
            <div className="w-fit">
              <img src={authorData.avatar} alt={authorData.author} />
              <div className="flex justify-between border-top border-t border-black">
                <p>Follow</p>
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
              <h1 className="text-subheading">{authorData.author}</h1>
              <p className="font-semibold">{authorData.biography.summary}</p>
              <p>{authorData.biography.body}</p>
            </div>
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
