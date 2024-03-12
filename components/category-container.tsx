interface CategoryContainerProps {
  children: React.ReactNode;
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({ children }) => {
  return <div className="mt-2 mx-2 lg:mx-auto max-w-5xl pt-20">{children}</div>;
};

export default CategoryContainer;
