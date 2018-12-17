import { Parish } from './parish';
import { Tags } from './tags';

export interface Event {
  id: number;
  title?: string;
  description?: string;
  organizationAt?: string;
  image?: boolean;
  parish?: Parish;
  community?: boolean;
  tags?: Tags[];
}
