export interface Artist {
  id: string;
  name: string;
  description: string;
  genre: string;
  event: "AM" | "808";
  image?: string;
  backgroundImage?: string;
  profileImage?: string;
  spotify?: string;
  instagram?: string;
}

export interface EventInfo {
  name: string;
  date: string;
  location: string;
  description: string;
}

export interface PriceItem {
  item: string;
  price: string;
  description?: string;
}

export interface Merchandise {
  item: string;
  price: string;
  description: string;
  image?: string;
}

export interface Organizer {
  name: string;
  role: string;
  description: string;
  image?: string;
  instagram?: string;
}
