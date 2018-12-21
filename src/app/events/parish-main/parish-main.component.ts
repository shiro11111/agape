import { Component, OnInit } from '@angular/core';
import { SetToolbarContentAction } from '../../toolbar/toolbar.actions';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-parish-main',
  templateUrl: './parish-main.component.html',
  styleUrls: ['./parish-main.component.css']
})
export class ParishMainComponent implements OnInit {

  navLinks = [
    { path: 'main', label: 'Główna' },
    { path: 'communities', label: 'Wspólnoty' },
    { path: 'events', label: 'Wydarzenia' },
  ];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new SetToolbarContentAction('Parafia św Łazarza'));
  }
}
