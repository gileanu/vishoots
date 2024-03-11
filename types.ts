export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  categorySlug: string;
  billboard: Billboard;
}

export interface Gallery {
  id: string;
  featImage: string;
  title: string;
  gallerySlug: string;
  location: string;
  specs: string;
  category: Category;
  isFeatures: boolean;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}
