import diningData from './sections/dining.json';
import roomsData from './sections/rooms.json';

export const rooms = roomsData.rooms;
export const menuItems = diningData.items;

export const categories = {
  rooms: roomsData.categories,
  menu: diningData.categories,
};
