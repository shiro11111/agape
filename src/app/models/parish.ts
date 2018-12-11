import { Image } from './image';
import { Deanery } from './deanery';
import { Dictionary } from './dictionary';

export interface Parish {
  id: number;
  image: Image;
  iskkNumber: number;
  name: string;
  dedicated: string;
  city: string;
  street: string;
  buildingNumber: string;
  apartmentNumber: string;
  postCode: string;
  postCity: string;
  phoneNumber: string;
  deanery: Deanery;
  parishType: Dictionary;
  province: Dictionary;
}

