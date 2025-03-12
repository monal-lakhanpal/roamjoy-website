
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from "sonner";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('zostel_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulating successful login
      if (email && password) {
        const mockUser = {
          id: `user_${Math.random().toString(36).substr(2, 9)}`,
          email,
          name: email.split('@')[0],
        };
        
        localStorage.setItem('zostel_user', JSON.stringify(mockUser));
        setUser(mockUser);
        toast.success("Successfully logged in");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulating successful signup
      if (name && email && password) {
        const mockUser = {
          id: `user_${Math.random().toString(36).substr(2, 9)}`,
          email,
          name,
        };
        
        localStorage.setItem('zostel_user', JSON.stringify(mockUser));
        setUser(mockUser);
        toast.success("Account created successfully");
      } else {
        throw new Error("Invalid signup data");
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error("Signup error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('zostel_user');
    setUser(null);
    toast.success("Successfully logged out");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
