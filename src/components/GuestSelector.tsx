
import { useState } from "react";
import { Users, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface GuestSelectorProps {
  className?: string;
}

const GuestSelector = ({ className }: GuestSelectorProps) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const incrementAdults = () => setAdults(prev => Math.min(prev + 1, 10));
  const decrementAdults = () => setAdults(prev => Math.max(prev - 1, 1));
  const incrementChildren = () => setChildren(prev => Math.min(prev + 1, 6));
  const decrementChildren = () => setChildren(prev => Math.max(prev - 1, 0));

  const totalGuests = adults + children;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className={`flex-grow md:flex-grow-0 bg-white/10 border-white/20 text-white hover:bg-white/20 ${className}`}
        >
          <Users className="mr-2 h-4 w-4" />
          <span>{totalGuests} {totalGuests === 1 ? 'Guest' : 'Guests'}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <div className="p-4 space-y-4">
          <h3 className="font-medium">Guests</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Adults</p>
              <p className="text-sm text-gray-500">Ages 13+</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={decrementAdults}
                disabled={adults <= 1}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-6 text-center">{adults}</span>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={incrementAdults}
                disabled={adults >= 10}
                className="h-8 w-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Children</p>
              <p className="text-sm text-gray-500">Ages 2-12</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={decrementChildren}
                disabled={children <= 0}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-6 text-center">{children}</span>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={incrementChildren}
                disabled={children >= 6}
                className="h-8 w-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default GuestSelector;
