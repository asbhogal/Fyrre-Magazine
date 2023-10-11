export default function AuthorPage({
  params,
}: {
  params: { author: string; job: string };
}) {
  console.log({ params });
  return <>{params.author}</>;
}
