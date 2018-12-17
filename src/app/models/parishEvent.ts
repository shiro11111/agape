import { Parish } from './parish';
import { Tags } from './tags';

export interface ParishEvent {
  id?: number;
  title?: string;
  description?: string;
  organizationAt?: string;
  image?: boolean;
  parish?: Parish;
  community?: boolean;
  tags?: Tags[];
}
