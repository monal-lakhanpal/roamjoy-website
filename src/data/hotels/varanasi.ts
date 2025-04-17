
import { Hotel } from "../types/hotel";

export const varanasiHotel: Hotel = {
  id: 5,
  name: "Holidayz Varanasi",
  location: "Assi Ghat, Varanasi",
  description: "Immerse yourself in the spiritual heart of India at Holidayz Varanasi. Our riverside hostel offers panoramic views of the Ganges and is a perfect base to explore the ancient city's mystical charm.",
  images: [
    "public/lovable-uploads/16c88e7a-8637-4335-a6a3-d7271308d2dd.png",
    "https://images.unsplash.com/photo-1566138884885-9c5762b4f4ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1584360459531-24a5d0fdf10d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1627894006066-b9384f8a13a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  ],
  rating: 4.4,
  reviews: 98,
  amenities: ["Free WiFi", "River Views", "Boat Tours", "Rooftop Yoga", "Cafe", "Cultural Activities"],
  rooms: [
    {
      id: 'varanasi-dorm-6',
      name: "6 Bed Mixed Dorm",
      price: 449,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Comfortable 6-bed mixed dorm with windows offering views of the bustling ghats."
    },
    {
      id: 'varanasi-dorm-4',
      name: "4 Bed Female Dorm",
      price: 549,
      image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      description: "Women-only dorm with enhanced security, personal lockers, and Ganga views."
    },
    {
      id: 'varanasi-private',
      name: "Ganga View Private Room",
      price: 1349,
      image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Peaceful private room with balcony overlooking the Ganges, perfect for witnessing the evening aarti."
    }
  ]
};
