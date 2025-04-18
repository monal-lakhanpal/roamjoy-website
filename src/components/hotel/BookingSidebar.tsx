
import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { format, differenceInDays, addDays } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface BookingSidebarProps {
  onBookNow: (roomId: string) => void;
  defaultRoomId: string;
  initialDate: string | null;
}

const BookingSidebar = ({ onBookNow, defaultRoomId, initialDate }: BookingSidebarProps) => {
  // Convert initialDate string to Date object if it exists
  const initialDateObj = initialDate ? new Date(initialDate) : undefined;
  
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(initialDateObj);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(
    initialDateObj ? addDays(initialDateObj, 1) : undefined
  );
  const [guests, setGuests] = useState(1);

  // Calculate number of nights
  const numberOfNights = checkInDate && checkOutDate ? 
    Math.max(1, differenceInDays(checkOutDate, checkInDate)) : 1;

  // Save check-in and check-out dates to session storage when they change
  useEffect(() => {
    if (checkInDate) {
      sessionStorage.setItem('checkInDate', checkInDate.toISOString());
    }
    if (checkOutDate) {
      sessionStorage.setItem('checkOutDate', checkOutDate.toISOString());
    }
  }, [checkInDate, checkOutDate]);

  const handleBookNow = () => {
    if (checkInDate && checkOutDate) {
      onBookNow(defaultRoomId);
    } else {
      toast.error("Please select check-in and check-out dates");
    }
  };

  return (
    <div className="sticky top-28 bg-white dark:bg-zostel-charcoal border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-zostel-navy dark:text-white">Plan Your Stay</h3>
      
      <div className="space-y-4">
        {/* Check-in Date */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Check-in Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal mt-1",
                  !checkInDate && "text-gray-500 dark:text-gray-400"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkInDate ? format(checkInDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={checkInDate}
                onSelect={(date) => {
                  setCheckInDate(date);
                  // If check-out date is before new check-in date, adjust it
                  if (checkOutDate && date && checkOutDate <= date) {
                    const newCheckOutDate = new Date(date);
                    newCheckOutDate.setDate(date.getDate() + 1);
                    setCheckOutDate(newCheckOutDate);
                  }
                }}
                disabled={(date) => date < new Date()}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Check-out Date */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Check-out Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal mt-1",
                  !checkOutDate && "text-gray-500 dark:text-gray-400"
                )}
                disabled={!checkInDate}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOutDate ? format(checkOutDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={checkOutDate}
                onSelect={setCheckOutDate}
                disabled={(date) => 
                  !date || 
                  (checkInDate ? date <= checkInDate : date <= new Date())
                }
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Guests */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Guests</label>
          <div className="mt-1 flex items-center border border-gray-300 dark:border-gray-700 rounded-md p-2">
            <Users className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
            <select 
              className="bg-transparent w-full focus:outline-none text-gray-700 dark:text-gray-200"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
            </select>
          </div>
        </div>
        
        <Button 
          onClick={handleBookNow}
          className="zostel-btn-primary w-full"
          disabled={!checkInDate || !checkOutDate}
        >
          Check Availability
        </Button>
        
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          <p>* Free cancellation up to 24 hours before check-in</p>
          <p>* Prices may vary based on dates and availability</p>
          {checkInDate && checkOutDate && (
            <p className="mt-2 text-zostel-teal font-medium">
              {numberOfNights} night{numberOfNights > 1 ? 's' : ''} stay
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingSidebar;
