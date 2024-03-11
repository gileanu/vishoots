export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  categorySlug: string;
  billboardId: Billboard;
}

export interface Gallery {
  id: string;
  featImage: string;
  images: Image[];
  title: string;
  gallerySlug: string;
  location: string;
  specs: string;
  category: string;
  isFeatures: boolean;
}

export interface Image {
  id: string;
  url: string;
}
