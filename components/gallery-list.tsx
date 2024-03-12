import { Gallery } from "@/types";
import NoResults from "./ui/s-no-results";
import GalleryCard from "./gallery-card";

interface GalleryListProps {
  items: Gallery[];
}

const GalleryList: React.FC<GalleryListProps> = ({ items }) => {
  return (
    <>
      {items.length === 0 && <NoResults />}
      <div className="my-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-30">
        {items.map((item) => (
          <GalleryCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default GalleryList;
