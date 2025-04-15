
import { useState, useEffect } from 'react';
import { X, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAuthModal = (type: 'login' | 'signup') => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'py-3 bg-white/90 dark:bg-zostel-charcoal/90 backdrop-blur-md shadow-sm' 
            : 'py-5 bg-white/70 dark:bg-zostel-charcoal/70 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50 flex items-center">
            <div className="w-10 h-10 bg-zostel-teal rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-zostel-navy dark:text-zostel-teal">
              HOLIDAYZ
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="underline-animation text-zostel-navy dark:text-white font-medium hover:text-zostel-teal">
              Home
            </Link>
            <Link to="/destinations" className="underline-animation text-zostel-navy dark:text-white font-medium hover:text-zostel-teal">
              Destinations
            </Link>
            <Link to="/about" className="underline-animation text-zostel-navy dark:text-white font-medium hover:text-zostel-teal">
              About
            </Link>
            <Link to="/profile" className="underline-animation text-zostel-navy dark:text-white font-medium hover:text-zostel-teal">
              Profile
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-zostel-navy dark:text-white">Hi, {user.name}</span>
                <Button
                  variant="outline"
                  className="zostel-btn-outline"
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  className="text-zostel-navy dark:text-white hover:text-zostel-teal hover:bg-transparent"
                  onClick={() => openAuthModal('login')}
                >
                  Login
                </Button>
                <Button 
                  className="zostel-btn-primary"
                  onClick={() => openAuthModal('signup')}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            aria-label="Toggle Menu"
            className="md:hidden flex items-center z-50" 
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-zostel-navy dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-zostel-navy dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            fixed inset-0 bg-white dark:bg-zostel-charcoal z-40 flex flex-col justify-center items-center
            transition-all duration-300 ease-in-out
            ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          `}
        >
          <nav className="flex flex-col items-center space-y-8">
            <Link 
              to="/" 
              className="text-xl text-zostel-navy dark:text-white hover:text-zostel-teal transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/destinations" 
              className="text-xl text-zostel-navy dark:text-white hover:text-zostel-teal transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              to="/about" 
              className="text-xl text-zostel-navy dark:text-white hover:text-zostel-teal transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/profile" 
              className="text-xl text-zostel-navy dark:text-white hover:text-zostel-teal transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            
            {user ? (
              <div className="flex flex-col items-center space-y-4 pt-4">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-zostel-teal" />
                  <span className="text-zostel-navy dark:text-white">{user.name}</span>
                </div>
                <Button
                  className="zostel-btn-primary"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-4 pt-4">
                <Button 
                  variant="outline" 
                  className="zostel-btn-outline w-40"
                  onClick={() => {
                    openAuthModal('login');
                    setIsOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button 
                  className="zostel-btn-primary w-40"
                  onClick={() => {
                    openAuthModal('signup');
                    setIsOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </nav>
        </div>
      </header>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        initialView={authType}
      />
    </>
  );
};

export default Navbar;
