type SubheadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Subheading({ children, className }: SubheadingProps) {
  return <h2 className={`pt-12 pb-16 ${className}`}>{children}</h2>;
}
