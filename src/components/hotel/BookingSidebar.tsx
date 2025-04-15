
import { useState } from 'react';
import { Calendar, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface BookingSidebarProps {
  onBookNow: (roomId: string) => void;
  defaultRoomId: string;
  initialDate: string | null;
}

const BookingSidebar = ({ onBookNow, defaultRoomId, initialDate }: BookingSidebarProps) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(initialDate);

  return (
    <div className="sticky top-28 bg-white dark:bg-zostel-charcoal border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-zostel-navy dark:text-white">Plan Your Stay</h3>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Check-in Date</label>
          <div className="mt-1 flex items-center border border-gray-300 dark:border-gray-700 rounded-md p-2">
            <Calendar className="w-5 h-5 text-gray-500 mr-2" />
            <input 
              type="date" 
              value={selectedDate || ''} 
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-transparent w-full focus:outline-none text-gray-700 dark:text-gray-200"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Guests</label>
          <div className="mt-1 flex items-center border border-gray-300 dark:border-gray-700 rounded-md p-2">
            <Users className="w-5 h-5 text-gray-500 mr-2" />
            <select className="bg-transparent w-full focus:outline-none text-gray-700 dark:text-gray-200">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
            </select>
          </div>
        </div>
        
        <Button 
          onClick={() => onBookNow(defaultRoomId)}
          className="zostel-btn-primary w-full"
        >
          Check Availability
        </Button>
        
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          <p>* Free cancellation up to 24 hours before check-in</p>
          <p>* Prices may vary based on dates and availability</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSidebar;
