import Link from "next/link";

type PostNavigationProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PostNavigation({ children }: PostNavigationProps) {
  return (
    <div className="flex justify-between">
      <Link className="uppercase font-semibold" href="/authors">
        Go Back
      </Link>
      <p className="uppercase font-semibold">{children}</p>
    </div>
  );
}
