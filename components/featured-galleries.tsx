import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import getGalleries from "@/actions/get-galleries";
import NoResults from "./no-results";
import GalleryCard from "./gallery-card";
const FeaturedGalleries = async () => {
  const galleries = await getGalleries({ isFeatured: true });
  return (
    <ScrollArea className="mb-5 pb-2" type="always">
      {galleries.length === 0 && <NoResults />}
      <ul className="flex flex-row gap-4 overflow-hidden">
        {galleries.map((item, index) => (
          <li className="w-[320px]" key={item.id}>
            <GalleryCard data={item} index={index} key={item.id} />
          </li>
        ))}
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default FeaturedGalleries;
