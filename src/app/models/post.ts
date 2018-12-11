import { Parish } from './parish';

export interface Post {
id: number;
description: string;
  createdAt: string;
  isPinned: boolean;
  parish: Parish;
  community: boolean;
}
