
import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import {
  Save,
  Bell,
  Mail,
  Shield,
  Globe,
  Database
} from 'lucide-react';

const Settings = () => {
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [bookingNotifications, setBookingNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  
  // Site settings
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [allowBookings, setAllowBookings] = useState(true);
  
  // API settings
  const [apiKey, setApiKey] = useState('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
  
  const handleSaveNotificationSettings = () => {
    toast.success("Notification settings saved!");
  };
  
  const handleSaveSiteSettings = () => {
    toast.success("Site settings saved!");
    
    if (maintenanceMode) {
      toast.info("Site is now in maintenance mode");
    }
    
    if (!allowBookings) {
      toast.info("New bookings are disabled");
    }
  };
  
  const handleRegenerateApiKey = () => {
    // Mock generating a new API key
    const newApiKey = 'yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy';
    setApiKey(newApiKey);
    toast.success("API key regenerated successfully");
  };
  
  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        {/* Notification Settings */}
        <Card className="p-6 shadow-md mb-6">
          <div className="flex items-center mb-4">
            <Bell className="h-5 w-5 mr-2 text-zostel-teal" />
            <h2 className="text-xl font-semibold">Notification Settings</h2>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium">Email Notifications</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive email notifications for important events</p>
              </div>
              <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium">Booking Alerts</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when new bookings are made</p>
              </div>
              <Switch checked={bookingNotifications} onCheckedChange={setBookingNotifications} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium">Marketing Emails</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates about new features and promotions</p>
              </div>
              <Switch checked={marketingEmails} onCheckedChange={setMarketingEmails} />
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button onClick={handleSaveNotificationSettings}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </Card>
        
        {/* Site Settings */}
        <Card className="p-6 shadow-md mb-6">
          <div className="flex items-center mb-4">
            <Globe className="h-5 w-5 mr-2 text-zostel-teal" />
            <h2 className="text-xl font-semibold">Site Settings</h2>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium">Maintenance Mode</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Put the site in maintenance mode</p>
              </div>
              <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium">Allow Bookings</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Enable users to make new bookings</p>
              </div>
              <Switch checked={allowBookings} onCheckedChange={setAllowBookings} />
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button onClick={handleSaveSiteSettings}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </Card>
        
        {/* API Settings */}
        <Card className="p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Database className="h-5 w-5 mr-2 text-zostel-teal" />
            <h2 className="text-xl font-semibold">API Settings</h2>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-medium mb-2">API Key</h3>
              <div className="flex">
                <Input value={apiKey} readOnly className="font-mono text-sm" />
                <Button variant="outline" className="ml-2" onClick={handleRegenerateApiKey}>
                  Regenerate
                </Button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                This key is used to authenticate API requests. Keep it secure.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </AdminLayout>
  );
};

export default Settings;
