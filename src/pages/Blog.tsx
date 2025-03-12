
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/hooks/useAuth';
import { initAnimations } from '@/utils/animations';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Must-Visit Spots in Goa for Backpackers",
    excerpt: "Beyond the popular beaches, discover the hidden gems that make Goa a backpacker's paradise.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Neha Sharma",
    date: "June 15, 2023",
    image: "/images/blog/goa-beaches.jpg",
    category: "Travel Tips",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Budget Travel Guide: Exploring North India Under ₹20,000",
    excerpt: "A comprehensive guide to experiencing the best of North India without breaking the bank.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Rahul Gupta",
    date: "August 22, 2023",
    image: "/images/blog/budget-travel.jpg",
    category: "Budget Travel",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Solo Female Travel: Safety Tips for Exploring India",
    excerpt: "Essential advice for women traveling alone in India, from practical safety measures to cultural insights.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Priya Desai",
    date: "September 5, 2023",
    image: "/images/blog/solo-travel.jpg",
    category: "Solo Travel",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "The Ultimate Himalayan Trek Guide for Beginners",
    excerpt: "Everything you need to know before embarking on your first Himalayan trekking adventure.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Vikram Singh",
    date: "October 12, 2023",
    image: "/images/blog/himalayan-trek.jpg",
    category: "Adventure",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "5 Cultural Festivals in India Every Traveler Should Experience",
    excerpt: "From Holi to Pushkar Camel Fair, these festivals offer a glimpse into India's rich cultural tapestry.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Anjali Kapoor",
    date: "November 8, 2023",
    image: "/images/blog/cultural-festivals.jpg",
    category: "Culture",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Eco-Friendly Travel: Sustainable Practices for Responsible Travelers",
    excerpt: "Simple ways to minimize your environmental impact while exploring India's diverse landscapes.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Arjun Mehta",
    date: "December 19, 2023",
    image: "/images/blog/eco-travel.jpg",
    category: "Sustainable Travel",
    readTime: "5 min read"
  }
];

const categories = [
  "All",
  "Travel Tips",
  "Budget Travel",
  "Solo Travel",
  "Adventure",
  "Culture",
  "Sustainable Travel"
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    initAnimations();
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-12 bg-gradient-to-b from-zostel-teal/10 to-white dark:from-zostel-navy/30 dark:to-zostel-charcoal">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-zostel-navy dark:text-white mb-4">
                Zostel Travel Blog
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Stories, tips, and insights from our community of travelers to inspire your next adventure.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Categories Filter */}
        <section className="py-6 bg-white dark:bg-zostel-charcoal border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-zostel-teal text-white'
                      : 'bg-gray-100 dark:bg-zostel-navy/30 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zostel-navy/50'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-12 bg-white dark:bg-zostel-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="zostel-card bg-white dark:bg-zostel-navy/20 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image || "/placeholder.svg"} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-zostel-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-zostel-navy dark:text-zostel-teal mb-2">{post.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.excerpt}</p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">By {post.author}</span>
                      <button className="zostel-btn-outline text-sm">Read More</button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Subscription */}
        <section className="py-16 bg-zostel-cream dark:bg-zostel-navy/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-zostel-navy dark:text-zostel-teal mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Get the latest travel tips, destination guides, and exclusive offers directly in your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zostel-charcoal text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-zostel-teal w-full sm:w-64"
                  />
                  <button className="zostel-btn-primary px-6 py-3">Subscribe</button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default BlogPage;
