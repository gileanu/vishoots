export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Gallery {
  id: string;
  featImage: string;
  images: Image[];
  title: string;
  location: string;
  specs: string;
  category: string;
  isFeatures: boolean;
}

export interface Image {
  id: string;
  url: string;
}
