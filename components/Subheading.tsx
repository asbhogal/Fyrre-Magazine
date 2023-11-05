import Link from "next/link";

type SubheadingProps = {
  children: React.ReactNode;
  className: string;
  url: string;
  linkText: string;
};

export default function Subheading({
  children,
  className,
  url,
  linkText,
}: SubheadingProps) {
  return (
    <div className="flex justify-between">
      <h2
        className={`mt-4 mb-8 md:mt-12 md:mb-16 max-w-[95rem] w-full mx-auto ${className}`}
      >
        {children}
      </h2>
      <Link
        className="flex justify-end items-center gap-2 uppercase font-semibold w-full"
        href={url}
      >
        <p className="uppercase font-semibold text-lg hidden sm:block md:text-[2rem]">
          {linkText}
        </p>
        <img
          className="w-fit h-fit"
          src="/icons/ri_arrow-right-line.svg"
          alt="A right black arrow"
        />
      </Link>
    </div>
  );
}
