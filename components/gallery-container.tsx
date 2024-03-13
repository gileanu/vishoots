interface ContainerProps {
  children: React.ReactNode;
}

const GalleryContainer: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto md:mx-2 max-w-5xl pt-24 ">{children}</div>;
};

export default GalleryContainer;
