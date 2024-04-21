interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="mx-auto max-w-7xl mt-4 px-4 sm:px-6 lg:px-8 pt-14">
      {children}
    </main>
  );
};

export default Container;
