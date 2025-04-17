
import { Hotel } from "../types/hotel";
import { goaHotel } from "./goa";
import { manaliHotel } from "./manali";
import { rishikeshHotel } from "./rishikesh";
import { jaipurHotel } from "./jaipur";
import { varanasiHotel } from "./varanasi";
import { udaipurHotel } from "./udaipur";
import { coorgHotel } from "./coorg";
import { spitiHotel } from "./spiti";

// Export the array of all hotels
export const hotels: Hotel[] = [
  goaHotel,
  manaliHotel,
  rishikeshHotel,
  jaipurHotel,
  varanasiHotel,
  udaipurHotel,
  coorgHotel,
  spitiHotel
];

// Export individual hotels
export {
  goaHotel,
  manaliHotel,
  rishikeshHotel,
  jaipurHotel,
  varanasiHotel,
  udaipurHotel,
  coorgHotel,
  spitiHotel
};
