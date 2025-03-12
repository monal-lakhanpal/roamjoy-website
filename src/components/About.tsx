
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const aboutImage = 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

const About = () => {
  const features = [
    "Community-focused travel experiences",
    "Budget-friendly accommodation",
    "Prime locations across India",
    "Cultural immersion opportunities",
    "Eco-friendly initiatives",
    "Local experiences and tours"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.2 } }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-zostel-charcoal/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={aboutImage} 
                alt="Zostel Community" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating card */}
            <motion.div 
              className="absolute -bottom-10 -right-10 glass-card rounded-xl p-6 max-w-xs shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-zostel-teal font-bold text-xl">2013</span>
                <div className="w-16 h-1 bg-gradient-to-r from-zostel-teal to-zostel-orange rounded-full" />
                <span className="text-zostel-orange font-bold text-xl">2023</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                A decade of creating unforgettable travel experiences across India's most beautiful destinations.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-zostel-teal font-medium text-sm uppercase tracking-wider mb-2 inline-block"
              variants={itemVariants}
            >
              About Zostel
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              India's First Branded 
              <span className="text-zostel-teal"> Hostel Chain</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
              variants={itemVariants}
            >
              Founded in 2013, Zostel revolutionized the way India travels. We're not just a place to stay; we're a community of like-minded travelers seeking authentic experiences, meaningful connections, and affordable adventures.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              With hostels and homes spread across 40+ destinations in India and Nepal, we've created spaces where travelers from around the world can come together, share stories, and create memories that last a lifetime.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="h-5 w-5 text-zostel-teal flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Button className="zostel-btn-primary">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
