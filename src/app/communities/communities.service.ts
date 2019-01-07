import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { List } from '../models/list';
import { ParishUtil } from '../parish/shared/utils/parish.util';
import { CommunityPost } from '../models/communityPost';

@Injectable ({
  providedIn: 'root'
})

export class CommunitiesService {
loadCommunityPosts(): Observable<List<CommunityPost>> {
  console.log('serwis');
  return of(ParishUtil.getCommunityPosts());
  }
}
