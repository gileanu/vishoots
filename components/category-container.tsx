interface CategoryContainerProps {
  children: React.ReactNode;
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
};

export default CategoryContainer;
