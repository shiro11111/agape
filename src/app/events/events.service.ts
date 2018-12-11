import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventUtil } from './shared/utils/event.util';
import { Parish } from '../models/parish';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  loadParish(): Observable<Parish> {
    return of(EventUtil.getParish());
  }
}

