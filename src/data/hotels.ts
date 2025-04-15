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

// Hotel data
export const hotels: Hotel[] = [
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
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
