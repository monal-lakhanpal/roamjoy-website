
import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Download,
  MapPin,
  Home
} from 'lucide-react';
import { destinationsData } from '@/data/adminMockData';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter destinations based on search query
  const filteredDestinations = destinationsData.filter(destination => 
    destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleAddDestination = () => {
    toast.info("Add destination functionality would be implemented here");
  };
  
  const handleEditDestination = (id: string) => {
    toast.info(`Edit destination with ID: ${id}`);
  };
  
  const handleDeleteDestination = (id: string) => {
    toast.info(`Delete destination with ID: ${id}`);
  };
  
  const handleViewDestination = (id: string) => {
    toast.info(`View destination with ID: ${id}`);
  };
  
  const handleToggleActive = (id: string, isActive: boolean) => {
    toast.success(`Destination ${isActive ? 'activated' : 'deactivated'}: ${id}`);
  };
  
  const handleExportData = () => {
    toast.info("Export data functionality would be implemented here");
  };
  
  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Destinations Management</h1>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search destinations..."
                className="pl-10 w-full sm:w-auto"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="border-dashed border-gray-300"
                onClick={handleExportData}
              >
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button onClick={handleAddDestination}>
                <Plus className="h-4 w-4 mr-2" />
                Add Destination
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="overflow-hidden shadow-md">
                <div className="relative h-48">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-1 text-zostel-teal" />
                      {destination.location}
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute top-2 right-2 bg-black/20 hover:bg-black/40 text-white"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleViewDestination(destination.id)}>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEditDestination(destination.id)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        onClick={() => handleDeleteDestination(destination.id)}
                        className="text-red-600 focus:text-red-600 dark:text-red-400 dark:focus:text-red-400"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                    {destination.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Home className="h-4 w-4 mr-1" />
                      <span>{destination.hotels} Hotels</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
                        {destination.active ? 'Active' : 'Inactive'}
                      </span>
                      <Switch 
                        checked={destination.active}
                        onCheckedChange={(checked) => handleToggleActive(destination.id, checked)}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-zostel-teal font-semibold">
                      {destination.price}
                    </span>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleEditDestination(destination.id)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
          
          {filteredDestinations.length === 0 && (
            <div className="col-span-full py-12 text-center">
              <MapPin className="h-12 w-12 mx-auto text-gray-300 dark:text-gray-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">No destinations found</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Try adjusting your search or add a new destination</p>
              <Button className="mt-4" onClick={handleAddDestination}>
                <Plus className="h-4 w-4 mr-2" />
                Add Destination
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default Destinations;
