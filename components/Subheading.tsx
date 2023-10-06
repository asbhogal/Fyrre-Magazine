type SubheadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Subheading({ children, className }: SubheadingProps) {
  return (
    <h2 className={`pt-4 pb-8 md:pt-12 md:pb-16 ${className}`}>{children}</h2>
  );
}
