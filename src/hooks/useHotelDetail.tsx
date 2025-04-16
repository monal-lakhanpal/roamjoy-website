
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
    // Get check-in and check-out dates from session storage if available
    const checkInDate = sessionStorage.getItem('checkInDate');
    const checkOutDate = sessionStorage.getItem('checkOutDate');
    
    // Build query parameters
    const queryParams = new URLSearchParams();
    if (roomId) queryParams.set('roomId', roomId);
    if (checkInDate) queryParams.set('checkIn', checkInDate);
    if (checkOutDate) queryParams.set('checkOut', checkOutDate);
    
    // Navigate to booking page with parameters
    navigate(`/booking/${hotel?.id}?${queryParams.toString()}`);
  };

  return {
    hotel,
    handleBookNow
  };
};
