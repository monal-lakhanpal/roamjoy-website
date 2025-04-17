
import { Hotel } from "../types/hotel";

export const manaliHotel: Hotel = {
  id: 2,
  name: "Holidayz Manali",
  location: "Old Manali, Himachal Pradesh",
  description: "Nestled in the heart of Old Manali, Holidayz Manali offers stunning mountain views and easy access to local attractions. Our hostel is designed for travelers seeking adventure and connections.",
  images: [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ],
  rating: 4.8,
  reviews: 186,
  amenities: ["Free WiFi", "Mountain Views", "Common Lounge", "Cafe", "Trekking Tours", "Hot Water"],
  rooms: [
    {
      id: 'manali-dorm-6',
      name: "6 Bed Mixed Dorm",
      price: 599,
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Comfortable 6-bed mixed dorm with mountain views, personal lockers, and warm bedding."
    },
    {
      id: 'manali-dorm-8',
      name: "8 Bed Mixed Dorm",
      price: 499,
      image: "https://images.unsplash.com/photo-1629794226066-349748040fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Budget-friendly 8-bed mixed dorm with personal lockers and reading lights."
    },
    {
      id: 'manali-private',
      name: "Deluxe Private Room",
      price: 1599,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Spacious private room with wooden interiors, king-sized bed, and stunning mountain views."
    }
  ]
};
