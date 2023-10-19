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

type AuthorPageProps = {
  params: {
    author: string;
    job: string;
    city: string;
    avatar: string;
    biography: {
      summary: string;
      body: string;
    };
  };
};

async function getAuthorDetails() {
  const res = await fetch(
    "https://raw.githubusercontent.com/asbhogal/Fyrre-Magazine/2eac71632cf6b13cfdc8b302ce0589ecf263c03c/json/articles.json"
  );

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const authors: AuthorData[] = await res.json();
  return authors;
}

export default async function AuthorDetails({ params }: AuthorPageProps) {
  try {
    const authors: AuthorData[] = await getAuthorDetails();

    // Debugging: Log the params.author and normalized slugs
    console.log("params.author:", params.author);
    authors.forEach((author) => {
      console.log("Normalized slug:", author.slug);
    });

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
