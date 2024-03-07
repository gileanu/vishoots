interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-24">
      {children}
    </div>
  );
};

export default Container;
