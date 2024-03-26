interface GalleryContainerProps {
  children: React.ReactNode;
}

const GalleryContainer: React.FC<GalleryContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-5xl px-3">{children}</div>;
};

export default GalleryContainer;
