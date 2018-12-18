import { Community } from './community';

export interface CommunityPost {
  id: number;
  description?: string;
  createdAt?: string;
  isPinned?: boolean;
  parish?: boolean;
  community?: Community;
}
