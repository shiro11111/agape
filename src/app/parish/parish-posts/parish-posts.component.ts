import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { List } from '../../models/list';
import { Observable } from 'rxjs';
import { AppState } from '../../app.reducers';
import { select, Store } from '@ngrx/store';
import { LoadPostsList } from '../parish.actions';
import { ParishState } from '../parish.reducers';
import { map } from 'rxjs/operators';
import { SetToolbarContentAction } from '../../toolbar/toolbar.actions';
import { getLublinParishes, parishPostsListSelector } from '../parish.selectors';

@Component({
  selector: 'app-parish-posts',
  templateUrl: './parish-posts.component.html',
  styleUrls: ['./parish-posts.component.css']
})
export class ParishPostsComponent implements OnInit {
  list$: Observable<List<Post>>;
  parishPosts$: Observable<Post[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadPostsList());

    this.store.dispatch(new SetToolbarContentAction('Parafia św. Łazarza'));

    // this.list$ = this.store.select('parishState').pipe(
    //   map((state: ParishState) => state && state.list));
    this.parishPosts$ = this.store.pipe(select(parishPostsListSelector));

    this.store.pipe(select(getLublinParishes)).subscribe((post: Post[]) => {
      console.log(post);
    });
  }
}
