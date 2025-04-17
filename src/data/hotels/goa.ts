
import { Hotel } from "../types/hotel";

export const goaHotel: Hotel = {
  id: 1,
  name: "Holidayz Goa",
  location: "Palolem Beach, Goa",
  description: "Located just 5 minutes from the beautiful Palolem Beach, Holidayz Goa offers a perfect blend of comfort and adventure. Enjoy the scenic beauty of Goa while experiencing our signature hospitality.",
  images: [
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ],
  rating: 4.7,
  reviews: 215,
  amenities: ["Free WiFi", "24/7 Reception", "Common Kitchen", "Cafe", "Outdoor Activities", "Hot Showers"],
  rooms: [
    {
      id: 'goa-dorm-6',
      name: "6 Bed Mixed Dorm",
      price: 549,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Comfortable 6-bed mixed dorm with personal lockers, reading lights, and charging points."
    },
    {
      id: 'goa-dorm-4',
      name: "4 Bed Female Dorm",
      price: 649,
      image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      description: "Female-only 4-bed dorm with enhanced privacy, personal lockers, and en-suite bathroom."
    },
    {
      id: 'goa-private',
      name: "Private Room",
      price: 1249,
      image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Cozy private room for two with king-sized bed, private bathroom, and sea view."
    }
  ]
};
