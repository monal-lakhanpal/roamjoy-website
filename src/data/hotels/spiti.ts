
import { Hotel } from "../types/hotel";

export const spitiHotel: Hotel = {
  id: 8,
  name: "Holidayz Spiti Valley",
  location: "Kaza, Himachal Pradesh",
  description: "Journey to the remote Himalayan desert at Holidayz Spiti Valley. Our eco-friendly hostel in Kaza offers breathtaking mountain views and is the perfect base to explore this magical cold desert landscape.",
  images: [
    "https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1629019695967-1f0aa37cac9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1614521084980-811d4ce95d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  ],
  rating: 4.8,
  reviews: 89,
  amenities: ["Free WiFi", "Mountain Tours", "Star Gazing", "Warm Bedding", "Local Cuisine", "Solar Powered"],
  rooms: [
    {
      id: 'spiti-dorm-6',
      name: "6 Bed Mixed Dorm",
      price: 799,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Warm and comfortable 6-bed mixed dorm with mountain views and extra thick blankets."
    },
    {
      id: 'spiti-dorm-4',
      name: "4 Bed Mixed Dorm",
      price: 899,
      image: "https://images.unsplash.com/photo-1629794226066-349748040fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Premium 4-bed mixed dorm with enhanced privacy, personal lockers, and stunning valley views."
    },
    {
      id: 'spiti-private',
      name: "Mountain View Room",
      price: 1899,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Cozy private room with panoramic mountain views, traditional decor, and modern amenities."
    }
  ]
};
