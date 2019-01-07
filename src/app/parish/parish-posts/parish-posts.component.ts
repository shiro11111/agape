import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { List } from '../../models/list';
import { Observable } from 'rxjs';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { LoadPostsList } from '../parish.actions';
import { ParishState } from '../parish.reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-parish-posts',
  templateUrl: './parish-posts.component.html',
  styleUrls: ['./parish-posts.component.css']
})
export class ParishPostsComponent implements OnInit {
  list$: Observable<List<Post>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadPostsList());

    this.list$ = this.store.select('parishState').pipe(
      map((state: ParishState) => state && state.list));
  }

}
