
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X, Mail, Lock, User } from "lucide-react";
import { useAuth } from '@/hooks/useAuth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView: 'login' | 'signup';
}

const AuthModal = ({ isOpen, onClose, initialView }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<string>(initialView);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const { login, signup } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      await login(loginEmail, loginPassword);
      onClose();
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    if (!signupName || !signupEmail || !signupPassword) {
      setError('All fields are required');
      setIsSubmitting(false);
      return;
    }
    
    if (signupPassword.length < 6) {
      setError('Password must be at least 6 characters');
      setIsSubmitting(false);
      return;
    }
    
    try {
      await signup(signupName, signupEmail, signupPassword);
      onClose();
    } catch (error) {
      setError('Failed to create account');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setError('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-lg p-0 overflow-hidden">
        <DialogHeader className="bg-zostel-teal text-white p-6 relative">
          <Button 
            variant="ghost" 
            className="absolute right-4 top-4 text-white hover:bg-zostel-teal/20" 
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-xl">Welcome to Zostel</DialogTitle>
          <DialogDescription className="text-white/80">
            Your adventure begins here
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="p-6">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    placeholder="hello@example.com" 
                    type="email" 
                    className="pl-10"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-sm text-zostel-teal hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    className="pl-10"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}
              
              <Button 
                type="submit" 
                className="w-full zostel-btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="pl-10"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="signup-email" 
                    placeholder="hello@example.com" 
                    type="email" 
                    className="pl-10"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="signup-password" 
                    type="password" 
                    className="pl-10"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Password must be at least 6 characters long
                </p>
              </div>

              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}
              
              <Button 
                type="submit" 
                className="w-full zostel-btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating account..." : "Create Account"}
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                By signing up, you agree to our{" "}
                <a href="#" className="text-zostel-teal hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-zostel-teal hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
