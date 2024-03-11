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
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <GalleryCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default GalleryList;
