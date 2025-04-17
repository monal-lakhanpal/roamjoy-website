
// Re-export all hotel types and data from the restructured files
export { Room, Hotel } from './types/hotel';
export { hotels } from './hotels/index';

// Re-export individual hotels if needed 
export {
  goaHotel,
  manaliHotel,
  rishikeshHotel,
  jaipurHotel,
  varanasiHotel,
  udaipurHotel,
  coorgHotel,
  spitiHotel
} from './hotels/index';
