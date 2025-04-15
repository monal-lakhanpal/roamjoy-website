
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Wifi, Coffee, Utensils, Users, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { AuthProvider } from '@/hooks/useAuth';
import { toast } from "sonner";

// Hotel data
const hotels = [
  {
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
  },
  {
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
  },
  {
    id: 3,
    name: "Holidayz Rishikesh",
    location: "Laxman Jhula, Rishikesh",
    description: "Perched on the banks of the Ganges, Holidayz Rishikesh offers a perfect mix of spirituality and adventure. Enjoy yoga sessions, white water rafting, and the serene beauty of the Himalayan foothills.",
    images: [
      "https://images.unsplash.com/photo-1584732200355-486c3f73a7cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1591018653367-7fefc1a32d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
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
  },
  {
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
  },
  {
    id: 5,
    name: "Holidayz Varanasi",
    location: "Assi Ghat, Varanasi",
    description: "Immerse yourself in the spiritual heart of India at Holidayz Varanasi. Our riverside hostel offers panoramic views of the Ganges and is a perfect base to explore the ancient city's mystical charm.",
    images: [
      "https://images.unsplash.com/photo-1561361058-c12e09083d88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1566138884885-9c5762b4f4ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1584360459531-24a5d0fdf10d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
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
  },
  {
    id: 6,
    name: "Holidayz Udaipur",
    location: "Lake Pichola, Udaipur",
    description: "Experience the romance of the City of Lakes at Holidayz Udaipur. Our lakeside property offers stunning views of palaces and mountains, creating an unforgettable backdrop for your stay.",
    images: [
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1585116938581-d3c355b286a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ],
    rating: 4.9,
    reviews: 205,
    amenities: ["Free WiFi", "Lake Views", "Rooftop Restaurant", "Boat Tours", "Heritage Walks", "Air Conditioning"],
    rooms: [
      {
        id: 'udaipur-dorm-6',
        name: "6 Bed Mixed Dorm",
        price: 699,
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Comfortable 6-bed mixed dorm with lakeside views, artistic decor, and modern amenities."
      },
      {
        id: 'udaipur-dorm-4',
        name: "4 Bed Female Dorm",
        price: 799,
        image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        description: "Female-only 4-bed dorm with enhanced privacy, personal lockers, and lake views."
      },
      {
        id: 'udaipur-private',
        name: "Lakeside Private Room",
        price: 1699,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Elegant private room with panoramic views of Lake Pichola and the royal palaces of Udaipur."
      }
    ]
  },
  {
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
  },
  {
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
  }
];

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [hotel, setHotel] = useState<any | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find hotel by id
    const hotelId = parseInt(id || '0');
    const foundHotel = hotels.find(h => h.id === hotelId);
    
    if (foundHotel) {
      setHotel(foundHotel);
      
      // Check if there's a date from search
      const searchDate = sessionStorage.getItem('searchDate');
      if (searchDate) {
        const formattedDate = new Date(searchDate).toISOString().split('T')[0];
        setSelectedDate(formattedDate);
      }
    } else {
      toast.error("Hotel not found");
      navigate('/destinations');
    }
  }, [id, navigate]);

  const handleBookNow = (roomId: string) => {
    // Store selected room and navigate to booking page
    navigate(`/booking/${hotel.id}?roomId=${roomId}`);
  };

  const nextImage = () => {
    if (hotel) {
      setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
    }
  };

  const prevImage = () => {
    if (hotel) {
      setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
    }
  };

  if (!hotel) {
    return (
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow flex items-center justify-center">
            <p>Loading...</p>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-20">
          {/* Image Gallery */}
          <div className="relative h-[50vh] bg-gray-200 overflow-hidden">
            <img 
              src={hotel.images[currentImageIndex]} 
              alt={hotel.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/50 transition-colors"
              aria-label="Previous image"
            >
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/50 transition-colors"
              aria-label="Next image"
            >
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {hotel.images.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300 
                    ${index === currentImageIndex ? 'bg-zostel-teal w-8' : 'bg-white/50 hover:bg-white/80'}
                  `}
                  aria-label={`View slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
              <div className="container mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{hotel.name}</h1>
                <div className="flex items-center text-white/90">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{hotel.location}</span>
                  <div className="ml-4 flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">{hotel.rating}</span>
                    <span className="mx-1">•</span>
                    <span>{hotel.reviews} reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-zostel-navy dark:text-white">About this hostel</h2>
                  <p className="text-gray-600 dark:text-gray-300">{hotel.description}</p>
                </section>
                
                {/* Amenities */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-zostel-navy dark:text-white">Amenities</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {hotel.amenities.map((amenity: string, index: number) => (
                      <div key={index} className="flex items-center">
                        {amenity.includes("WiFi") ? <Wifi className="w-5 h-5 mr-2 text-zostel-teal" /> : 
                         amenity.includes("Kitchen") ? <Utensils className="w-5 h-5 mr-2 text-zostel-teal" /> : 
                         amenity.includes("Cafe") ? <Coffee className="w-5 h-5 mr-2 text-zostel-teal" /> : 
                         <div className="w-5 h-5 mr-2 flex items-center justify-center rounded-full bg-zostel-teal/20 text-zostel-teal">✓</div>}
                        <span className="text-gray-700 dark:text-gray-300">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </section>
                
                {/* Rooms */}
                <section>
                  <h2 className="text-2xl font-semibold mb-6 text-zostel-navy dark:text-white">Available Rooms</h2>
                  <div className="space-y-6">
                    {hotel.rooms.map((room: any) => (
                      <motion.div 
                        key={room.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="h-48 md:h-full">
                            <img 
                              src={room.image} 
                              alt={room.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4 md:p-6 md:col-span-2 flex flex-col">
                            <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{room.description}</p>
                            
                            <div className="mt-auto flex flex-wrap items-center justify-between">
                              <div>
                                <span className="text-2xl font-bold text-zostel-navy dark:text-zostel-teal">₹{room.price}</span>
                                <span className="text-gray-500 dark:text-gray-400 text-sm">/night</span>
                              </div>
                              
                              <Button 
                                onClick={() => handleBookNow(room.id)}
                                className="zostel-btn-primary"
                              >
                                Book Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 bg-white dark:bg-zostel-charcoal border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-zostel-navy dark:text-white">Plan Your Stay</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Check-in Date</label>
                      <div className="mt-1 flex items-center border border-gray-300 dark:border-gray-700 rounded-md p-2">
                        <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                        <input 
                          type="date" 
                          value={selectedDate || ''} 
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="bg-transparent w-full focus:outline-none text-gray-700 dark:text-gray-200"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Guests</label>
                      <div className="mt-1 flex items-center border border-gray-300 dark:border-gray-700 rounded-md p-2">
                        <Users className="w-5 h-5 text-gray-500 mr-2" />
                        <select className="bg-transparent w-full focus:outline-none text-gray-700 dark:text-gray-200">
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                        </select>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => handleBookNow(hotel.rooms[0].id)}
                      className="zostel-btn-primary w-full"
                    >
                      Check Availability
                    </Button>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                      <p>* Free cancellation up to 24 hours before check-in</p>
                      <p>* Prices may vary based on dates and availability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default HotelDetail;
