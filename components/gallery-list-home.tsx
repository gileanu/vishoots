import { Gallery } from "@/types";
import NoResults from "./ui/s-no-results";
import GalleryCardHome from "./gallery-card-home";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface GalleryListProps {
  items: Gallery[];
}

const GalleryListHome: React.FC<GalleryListProps> = ({ items }) => {
  return (
    <>
      <ScrollArea className="mb-5">
        {items.length === 0 && <NoResults />}
        <div className="mb-4 flex flex-row gap-4">
          {items.map((item) => (
            <GalleryCardHome key={item.id} data={item} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};

export default GalleryListHome;
