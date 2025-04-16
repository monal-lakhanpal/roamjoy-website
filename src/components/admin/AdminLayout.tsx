
import { useState, ReactNode } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  LogOut,
  Menu,
  Users,
  Map,
  Building,
  Calendar,
  Settings,
  ChevronDown,
  User,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import { useTheme } from 'next-themes';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { adminUser, adminLogout, isAdminAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  if (!isAdminAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleLogout = () => {
    adminLogout();
    navigate('/admin/login');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: 'Users', path: '/admin/users', icon: <Users className="h-5 w-5" /> },
    { name: 'Destinations', path: '/admin/destinations', icon: <Map className="h-5 w-5" /> },
    { name: 'Hotels', path: '/admin/hotels', icon: <Building className="h-5 w-5" /> },
    { name: 'Bookings', path: '/admin/bookings', icon: <Calendar className="h-5 w-5" /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-zostel-charcoal">
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-20 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed lg:static inset-y-0 left-0 z-30 w-64 flex-shrink-0 bg-white dark:bg-zostel-navy/30 border-r dark:border-zostel-navy/50 shadow-md lg:shadow-none flex flex-col transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
        initial={false}
      >
        {/* Sidebar header */}
        <div className="h-16 flex items-center justify-between px-4 border-b dark:border-zostel-navy/50">
          <Link to="/admin/dashboard" className="flex items-center space-x-2">
            <span className="font-bold text-zostel-teal text-xl">Holidayz</span>
            <span className="font-semibold text-zostel-navy dark:text-white text-lg">Admin</span>
          </Link>
          <button
            className="lg:hidden p-1 rounded-md hover:bg-gray-200 dark:hover:bg-zostel-navy/50"
            onClick={toggleSidebar}
          >
            <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Sidebar content */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-zostel-teal/10 text-zostel-teal'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zostel-navy/50'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Sidebar footer */}
        <div className="p-4 border-t dark:border-zostel-navy/50">
          <Button
            variant="outline"
            className="w-full justify-start text-red-500 border-red-200 dark:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white dark:bg-zostel-navy/30 border-b dark:border-zostel-navy/50 shadow-sm flex items-center justify-between px-4">
          <button
            className="p-1 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-zostel-navy/50"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zostel-navy/50"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            <div className="relative">
              <button
                className="flex items-center space-x-2 focus:outline-none"
                onClick={toggleUserMenu}
              >
                <img
                  src={adminUser?.avatar || "https://via.placeholder.com/40"}
                  alt="Admin"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="hidden md:block text-sm font-medium dark:text-white">
                  {adminUser?.name}
                </span>
                <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-zostel-navy/80 shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50">
                  <Link
                    to="/admin/profile"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zostel-navy"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>Your Profile</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setUserMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-zostel-navy"
                  >
                    <div className="flex items-center">
                      <LogOut className="h-4 w-4 mr-2" />
                      <span>Logout</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-100 dark:bg-zostel-charcoal">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
