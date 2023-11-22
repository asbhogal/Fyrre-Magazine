type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
  imgSrc: string;
  imgAlt: string;
};

export default function PageTitle({
  children,
  className,
  imgSrc,
  imgAlt,
}: PageTitleProps) {
  return (
    <div className="max-w-[95rem] w-full mx-auto">
      <h1 className={className}>{children}</h1>
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="py-6 md:py-12 h-full w-full"
        />
      )}
    </div>
  );
}
