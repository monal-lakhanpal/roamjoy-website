
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { hotels, Hotel } from '@/data/hotels';
import { toast } from "sonner";

export const useHotelDetail = (id: string | undefined) => {
  const navigate = useNavigate();
  const [hotel, setHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find hotel by id
    const hotelId = parseInt(id || '0');
    const foundHotel = hotels.find(h => h.id === hotelId);
    
    if (foundHotel) {
      setHotel(foundHotel);
    } else {
      toast.error("Hotel not found");
      navigate('/destinations');
    }
  }, [id, navigate]);

  const handleBookNow = (roomId: string) => {
    // Store selected room and navigate to booking page
    navigate(`/booking/${hotel?.id}?roomId=${roomId}`);
  };

  return {
    hotel,
    handleBookNow
  };
};
