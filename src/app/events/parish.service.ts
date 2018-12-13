import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ParishUtil } from './shared/utils/parish.util';
import { Parish } from '../models/parish';
import { Post } from '../models/post';
import { List } from '../models/list';

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
}

