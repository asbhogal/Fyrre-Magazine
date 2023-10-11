type SubheadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Subheading({ children, className }: SubheadingProps) {
  return (
    <h2
      className={`pt-4 pb-8 md:pt-12 md:pb-16 max-w-[95rem] w-full mx-auto ${className}`}
    >
      {children}
    </h2>
  );
}
