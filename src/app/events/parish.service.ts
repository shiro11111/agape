import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ParishUtil } from './shared/utils/parish.util';
import { Parish } from '../models/parish';
import { Post } from '../models/post';
import { List } from '../models/list';
import { Community } from '../models/community';
import { ParishEvent } from '../models/parishEvent';
import { CommunityPost } from '../models/communityPost';

@Injectable({
  providedIn: 'root'
})

export class ParishService {
  loadParish(): Observable<Parish> {
    return of(ParishUtil.getParish());
  }
  loadPosts(): Observable<List<Post>> {
    return of(ParishUtil.getPostsList());
  }
  loadCommunityPosts(): Observable<List<Community>> {
    return of(ParishUtil.getCommunityList());
  }
  loadEventsPosts(): Observable<List<ParishEvent>> {
    return of(ParishUtil.getEventsList());
  }
  loadCommunityDetails(): Observable<List<CommunityPost>> {
    return of(ParishUtil.getCommunityDetails());
  }
  loadEventDetails(): Observable<ParishEvent> {
    return of(ParishUtil.getEventDetails());
  }
}

