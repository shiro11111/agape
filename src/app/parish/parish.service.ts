import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ParishUtil } from './shared/utils/parish.util';
import { Parish } from '../models/parish';
import { Post } from '../models/post';
import { List } from '../models/list';
import { Community } from '../models/community';
import { ParishEvent } from '../models/parishEvent';
import { filter, map } from 'rxjs/operators';
import { denormalize, normalize } from 'normalizr';
import { communityPost, parishEvent, post } from '../schemas/schemas';
import { CommunityPost } from '../models/communityPost';

@Injectable({
  providedIn: 'root'
})

export class ParishService {
  loadParish(): Observable<Parish> {
    return of(ParishUtil.getParish());
  }

  loadPosts(): Observable<List<Post>> {

    of(ParishUtil.getPostsList()).pipe(
      filter((list: List<Post>) => !!(list && list.items)),
      map((list: List<Post>) => ({
        ...list,
        items: normalize(list.items, [post])
      }))
    ).subscribe(data => {
      console.log('normalized', data);

      console.log('denormalized', denormalize(data.items.result, [post], data.items.entities));
    });

    return of(ParishUtil.getPostsList());
  }

  loadCommunityPosts(): Observable<List<Community>> {
    of(ParishUtil.getCommunityPosts()).pipe(
      filter((list: List<CommunityPost>) => !!(list && list.items)),
      map((list: List<CommunityPost>) => ({
        ...list,
        items: normalize(list.items, [communityPost])
      }))
    ).subscribe(data => {
      console.log('normalized', data);

      console.log('denormalized', denormalize(data.items.result, [parishEvent], data.items.entities));
    });
    return of(ParishUtil.getCommunityList());
  }

  loadEventsPosts(): Observable<List<ParishEvent>> {
    of(ParishUtil.getEventsList()).pipe(
      filter((list: List<ParishEvent>) => !!(list && list.items)),
      map((list: List<ParishEvent>) => ({
      ...list,
        items: normalize(list.items, [parishEvent])
      }))
    ).subscribe(data => {
      console.log('normalized', data);

      console.log('denormalized', denormalize(data.items.result, [parishEvent], data.items.entities));
    });
    return of(ParishUtil.getEventsList());
  }

  loadEventDetails(): Observable<ParishEvent> {
    return of(ParishUtil.getEventDetails());
  }
}

