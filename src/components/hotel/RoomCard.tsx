
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Room } from '@/data/hotels';

interface RoomCardProps {
  room: Room;
  onBookNow: (roomId: string) => void;
}

const RoomCard = ({ room, onBookNow }: RoomCardProps) => {
  return (
    <motion.div 
      key={room.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="h-48 md:h-full">
          <img 
            src={room.image} 
            alt={room.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 md:p-6 md:col-span-2 flex flex-col">
          <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{room.description}</p>
          
          <div className="mt-auto flex flex-wrap items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-zostel-navy dark:text-zostel-teal">₹{room.price}</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">/night</span>
            </div>
            
            <Button 
              onClick={() => onBookNow(room.id)}
              className="zostel-btn-primary"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
