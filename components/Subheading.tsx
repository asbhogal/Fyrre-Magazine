type SubheadingProps = {
  children: React.ReactNode;
};

export default function Subheading({ children }: SubheadingProps) {
  return <h2 className="text-subheading">{children}</h2>;
}
