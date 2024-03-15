interface CategoryContainerProps {
  children: React.ReactNode;
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-5xl">{children}</div>;
};

export default CategoryContainer;
