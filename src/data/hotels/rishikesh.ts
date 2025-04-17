
import { Hotel } from "../types/hotel";

export const rishikeshHotel: Hotel = {
  id: 3,
  name: "Holidayz Rishikesh",
  location: "Laxman Jhula, Rishikesh",
  description: "Perched on the banks of the Ganges, Holidayz Rishikesh offers a perfect mix of spirituality and adventure. Enjoy yoga sessions, white water rafting, and the serene beauty of the Himalayan foothills.",
  images: [
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1591018653367-7fefc1a32d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  ],
  rating: 4.6,
  reviews: 154,
  amenities: ["Free WiFi", "Yoga Deck", "Adventure Sports", "Riverfront Views", "Cafe", "Meditation Areas"],
  rooms: [
    {
      id: 'rishikesh-dorm-6',
      name: "6 Bed Mixed Dorm",
      price: 499,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Comfortable 6-bed mixed dorm with river views, personal lockers, and charging points."
    },
    {
      id: 'rishikesh-dorm-4',
      name: "4 Bed Female Dorm",
      price: 599,
      image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      description: "Female-only 4-bed dorm with enhanced privacy, personal lockers, and en-suite bathroom."
    },
    {
      id: 'rishikesh-private',
      name: "Riverside Private Room",
      price: 1399,
      image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Serene private room with balcony overlooking the Ganges, queen-sized bed, and private bathroom."
    }
  ]
};
