type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
  imgSrc?: string;
};

export default function PageTitle({
  children,
  className,
  imgSrc,
}: PageTitleProps) {
  return (
    <div className="max-w-[95rem] w-full mx-auto">
      <h1 className={className}>{children}</h1>
      {imgSrc && (
        <img
          src={imgSrc}
          alt="Art & Life in bold letter"
          className="py-12 w-full"
        />
      )}
    </div>
  );
}
