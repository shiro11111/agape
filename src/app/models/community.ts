import { Image } from './image';
import { Parish } from './parish';

export interface Community {
  id: number;
  image?: Image;
  name?: string;
  description?: string;
  city?: string;
  street?: string;
  buildingNumber?: string;
  apartmentNumber?: string;
  postCode?: string;
  postCity?: string;
  parish?: Parish;
  createdAt?: string;
  }


