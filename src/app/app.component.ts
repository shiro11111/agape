import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { map } from 'rxjs/operators';
import { ToolbarState } from './toolbar/toolbar.reducer';
import { SetToolbarContentAction } from './toolbar/toolbar.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'agape';
  toolbarContent$: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.toolbarContent$ = this.store.select('toolbarState').pipe(
      map((state: ToolbarState) => state && state.content)
    );
    this.store.dispatch(new SetToolbarContentAction('Parafia św Łazarza'));
  }
}




