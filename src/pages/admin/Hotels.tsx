
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
  Star,
  MapPin,
  Bed
} from 'lucide-react';
import { hotelsData } from '@/data/adminMockData';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { toast } from 'sonner';

const Hotels = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter hotels based on search query
  const filteredHotels = hotelsData.filter(hotel => 
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleAddHotel = () => {
    toast.info("Add hotel functionality would be implemented here");
  };
  
  const handleEditHotel = (id: string) => {
    toast.info(`Edit hotel with ID: ${id}`);
  };
  
  const handleDeleteHotel = (id: string) => {
    toast.info(`Delete hotel with ID: ${id}`);
  };
  
  const handleViewHotel = (id: string) => {
    toast.info(`View hotel with ID: ${id}`);
  };
  
  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Hotels Management</h1>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search hotels..."
                className="pl-10 w-full sm:w-auto"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button onClick={handleAddHotel}>
              <Plus className="h-4 w-4 mr-2" />
              Add Hotel
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredHotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="overflow-hidden shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5 h-48">
                    <img 
                      src={hotel.images[0]} 
                      alt={hotel.name}
                      className="h-full w-full object-cover"
                    />
                    
                    <div className="absolute top-2 right-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="bg-black/20 hover:bg-black/40 text-white"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleViewHotel(hotel.id)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditHotel(hotel.id)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => handleDeleteHotel(hotel.id)}
                            className="text-red-600 focus:text-red-600 dark:text-red-400 dark:focus:text-red-400"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  
                  <div className="p-4 w-full md:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-lg font-semibold">{hotel.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                          <span>{hotel.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({hotel.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <MapPin className="h-4 w-4 mr-1 text-zostel-teal" />
                        {hotel.location}
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                        {hotel.description}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{hotel.rooms.length} Room Types</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {hotel.amenities.slice(0, 3).map((amenity, index) => (
                            <span 
                              key={index} 
                              className="text-xs px-2 py-1 bg-gray-100 dark:bg-zostel-navy/30 rounded-full"
                            >
                              {amenity}
                            </span>
                          ))}
                          {hotel.amenities.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-zostel-navy/30 rounded-full">
                              +{hotel.amenities.length - 3}
                            </span>
                          )}
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditHotel(hotel.id)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
          
          {filteredHotels.length === 0 && (
            <div className="col-span-full py-12 text-center">
              <Bed className="h-12 w-12 mx-auto text-gray-300 dark:text-gray-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">No hotels found</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Try adjusting your search or add a new hotel</p>
              <Button className="mt-4" onClick={handleAddHotel}>
                <Plus className="h-4 w-4 mr-2" />
                Add Hotel
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default Hotels;
