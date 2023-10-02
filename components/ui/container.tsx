type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container 3xl mx-auto w-full xs:px-4 sm:px-8 md:px-8 lg:px-8 xl:px-0">
      {children}
    </div>
  );
};

export default Container;
