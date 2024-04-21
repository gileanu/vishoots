export interface Category {
  id: string;
  name: string;
  categorySlug: string;
  imageUrl: string;
  categoryDesc: string;
}

export interface Gallery {
  id: string;
  featImage: string;
  title: string;
  gallerySlug: string;
  location: string;
  specs: string;
  category: Category;
  isFeatured: boolean;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}
