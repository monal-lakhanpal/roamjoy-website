
import { Hotel } from "../types/hotel";

export const jaipurHotel: Hotel = {
  id: 4,
  name: "Holidayz Jaipur",
  location: "Old City, Jaipur",
  description: "Experience the royal heritage of Rajasthan at Holidayz Jaipur. Our hostel is located in the vibrant old city area, within walking distance from famous historical sites and bustling bazaars.",
  images: [
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1610025642839-7c573e562b78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  ],
  rating: 4.5,
  reviews: 123,
  amenities: ["Free WiFi", "Rooftop Terrace", "Heritage Tours", "Common Kitchen", "Cafe", "Air Conditioning"],
  rooms: [
    {
      id: 'jaipur-dorm-8',
      name: "8 Bed Mixed Dorm",
      price: 449,
      image: "https://images.unsplash.com/photo-1629794226066-349748040fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Budget-friendly 8-bed mixed dorm with traditional Rajasthani decor and modern amenities."
    },
    {
      id: 'jaipur-dorm-4',
      name: "4 Bed Mixed Dorm",
      price: 649,
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Premium 4-bed mixed dorm with enhanced privacy, personal lockers, and city views."
    },
    {
      id: 'jaipur-private',
      name: "Heritage Private Room",
      price: 1549,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Elegantly designed private room with traditional Rajasthani elements, king-sized bed, and city views."
    }
  ]
};
