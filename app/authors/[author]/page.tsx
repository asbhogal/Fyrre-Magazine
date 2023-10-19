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
        <div>
          <h1>{authorData.author}</h1>
          <img src={authorData.avatar} alt={authorData.author} />
          <p>Job: {authorData.job}</p>
          <p>City: {authorData.city}</p>
          <p>Biography Summary: {authorData.biography.summary}</p>
          <p>Biography Body: {authorData.biography.body}</p>
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
