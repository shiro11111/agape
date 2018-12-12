import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {  LoadParish } from '../parish.actions';
import { map } from 'rxjs/operators';
import { ParishState } from '../parish.reducers';
import { Parish } from '../../models/parish';
import { AppState } from '../../app.reducers';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parish-display',
  templateUrl: './parish-display.component.html',
  styleUrls: ['./parish-display.component.css']
})
export class ParishDisplayComponent implements OnInit {
  display$: Observable<Parish>;

  constructor(private store: Store<AppState>, private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadParish());

    this.display$ = this.store.select('parishState').pipe(
      map((state: ParishState) => state && state.display));
  }
}
