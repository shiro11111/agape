import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ParishUtil } from './shared/utils/parish.util';
import { Parish } from '../models/parish';

@Injectable({
  providedIn: 'root'
})

export class ParishService {
  loadParish(): Observable<Parish> {
    return of(ParishUtil.getParish());
  }
}

