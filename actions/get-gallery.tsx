import { Gallery } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/galleries`;

const getGallery = async (id: string): Promise<Gallery> => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

export default getGallery;
