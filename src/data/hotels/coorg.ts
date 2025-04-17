
import { Hotel } from "../types/hotel";

export const coorgHotel: Hotel = {
  id: 7,
  name: "Holidayz Coorg",
  location: "Madikeri, Karnataka",
  description: "Escape to the misty hills of Coorg at our eco-friendly hostel surrounded by coffee plantations. Experience the perfect blend of adventure, nature, and the rich culture of Kodagu region.",
  images: [
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    "https://images.unsplash.com/photo-1582121427803-c78242789468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1625494815249-eca1afc5c113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  ],
  rating: 4.7,
  reviews: 156,
  amenities: ["Free WiFi", "Plantation Tours", "Trekking", "Campfire", "Cafe", "Local Experiences"],
  rooms: [
    {
      id: 'coorg-dorm-6',
      name: "6 Bed Mixed Dorm",
      price: 749,
      image: "https://images.unsplash.com/photo-1629794226066-349748040fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Cozy 6-bed mixed dorm with views of coffee plantations and modern amenities."
    },
    {
      id: 'coorg-dorm-4',
      name: "4 Bed Mixed Dorm",
      price: 849,
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Premium 4-bed mixed dorm with enhanced privacy, personal lockers, and plantation views."
    },
    {
      id: 'coorg-private',
      name: "Plantation View Room",
      price: 1749,
      image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Serene private room overlooking coffee estates with a king-sized bed and private balcony."
    }
  ]
};
