
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AdminUser } from '@/types/admin';
import { toast } from 'sonner';

interface AdminAuthContextType {
  adminUser: AdminUser | null;
  isAdminAuthenticated: boolean;
  adminLogin: (email: string, password: string) => Promise<boolean>;
  adminLogout: () => void;
  isLoading: boolean;
  updateAdminProfile: (data: Partial<AdminUser>) => Promise<boolean>;
  updateAdminPassword: (currentPassword: string, newPassword: string) => Promise<boolean>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing admin session on load
  useEffect(() => {
    const storedAdmin = localStorage.getItem('adminUser');
    if (storedAdmin) {
      try {
        setAdminUser(JSON.parse(storedAdmin));
      } catch (error) {
        console.error('Failed to parse admin user data', error);
        localStorage.removeItem('adminUser');
      }
    }
    setIsLoading(false);
  }, []);

  const adminLogin = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Hardcoded credentials for demonstration
      if (email === 'admin@yopmail.com' && password === 'admin@123') {
        const adminData: AdminUser = {
          id: '1',
          email: 'admin@yopmail.com',
          name: 'Admin User',
          role: 'Administrator',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          lastLogin: new Date()
        };
        
        setAdminUser(adminData);
        localStorage.setItem('adminUser', JSON.stringify(adminData));
        toast.success('Login successful');
        return true;
      } else {
        toast.error('Invalid credentials');
        return false;
      }
    } catch (error) {
      console.error('Login failed', error);
      toast.error('Login failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const adminLogout = () => {
    setAdminUser(null);
    localStorage.removeItem('adminUser');
    toast.success('Logged out successfully');
  };

  const updateAdminProfile = async (data: Partial<AdminUser>): Promise<boolean> => {
    if (!adminUser) return false;
    
    try {
      const updatedUser = { ...adminUser, ...data };
      setAdminUser(updatedUser);
      localStorage.setItem('adminUser', JSON.stringify(updatedUser));
      toast.success('Profile updated successfully');
      return true;
    } catch (error) {
      console.error('Failed to update profile', error);
      toast.error('Failed to update profile');
      return false;
    }
  };

  const updateAdminPassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    if (currentPassword !== 'admin@123') {
      toast.error('Current password is incorrect');
      return false;
    }
    
    // In a real application, this would make an API call to update the password
    toast.success('Password updated successfully');
    return true;
  };

  return (
    <AdminAuthContext.Provider
      value={{
        adminUser,
        isAdminAuthenticated: !!adminUser,
        adminLogin,
        adminLogout,
        isLoading,
        updateAdminProfile,
        updateAdminPassword
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
