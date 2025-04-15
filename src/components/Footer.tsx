
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zostel-navy text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ZOSTEL</h3>
            <p className="text-gray-300 mb-4">
              India's first chain of backpacker hostels providing unique, social and affordable travel experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-zostel-teal transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-zostel-teal transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-zostel-teal transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-zostel-teal transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-zostel-teal transition-colors inline-block py-1"
                >
                  Destinations
                </a>
              </li>
             
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-zostel-teal transition-colors inline-block py-1"
                >
                  About Us
                </a>
              </li>
             
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-zostel-teal transition-colors inline-block py-1"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-zostel-teal transition-colors inline-block py-1"
                >
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-zostel-teal flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Zostel Hospitality Pvt. Ltd.<br />
                  H-19, Sector 63,<br />
                  Noida, UP, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-zostel-teal flex-shrink-0" />
                <a href="tel:+919061800800" className="text-gray-300 hover:text-zostel-teal transition-colors">
                  +91 90618 00800
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-zostel-teal flex-shrink-0" />
                <a href="mailto:hello@zostel.com" className="text-gray-300 hover:text-zostel-teal transition-colors">
                  hello@zostel.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for travel inspiration, tips, and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 focus:ring-zostel-teal focus:border-zostel-teal text-white"
              />
              <Button className="zostel-btn-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 my-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Zostel. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 text-sm hover:text-zostel-teal transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-zostel-teal transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-zostel-teal transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
