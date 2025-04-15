
import RoomCard from './RoomCard';
import { Room } from '@/data/hotels';

interface RoomsListProps {
  rooms: Room[];
  onBookNow: (roomId: string) => void;
}

const RoomsList = ({ rooms, onBookNow }: RoomsListProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-zostel-navy dark:text-white">Available Rooms</h2>
      <div className="space-y-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} onBookNow={onBookNow} />
        ))}
      </div>
    </section>
  );
};

export default RoomsList;
