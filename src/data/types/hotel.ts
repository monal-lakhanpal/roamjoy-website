
// Hotel data types
export interface Room {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  images: string[];
  rating: number;
  reviews: number;
  amenities: string[];
  rooms: Room[];
}
