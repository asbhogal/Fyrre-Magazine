import Link from "next/link";

type PostNavigationProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PostNavigation({ children }: PostNavigationProps) {
  return (
    <div className="flex justify-between pt-8 pb-24">
      <Link className="flex gap-2 uppercase font-semibold" href="/authors">
        <img
          className="rotate-180"
          src="/icons/ri_arrow-right-line.svg"
          alt="Right arrow"
        />
        Go Back
      </Link>
      <p className="uppercase font-semibold">{children}</p>
    </div>
  );
}
