import { Gallery } from "@/types";

import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/galleries`;

interface Query {
  categoryId?: string;
  isFeatured?: boolean;
}

const getGalleries = async (query: Query): Promise<Gallery[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);
  return res.json();
};

export default getGalleries;
