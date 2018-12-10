import { Injectable } from '@angular/core';
import { ChurchEvent } from '../events-interface';
import { Observable, of } from 'rxjs';
import { EventUtil } from './shared/utils/event.util';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  loadEvents(): Observable<ChurchEvent[]> {
    return of(EventUtil.getEventsList());
  }
}

