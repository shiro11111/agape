import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communities-main',
  templateUrl: './communities-main.component.html',
  styleUrls: ['./communities-main.component.css']
})
export class CommunitiesMainComponent implements OnInit {
  navLinks = [
    { path: 'tab1', label: 'zakladka1' },
    { path: 'tab2', label: 'zakladka2'},
    { path: 'tab3', label: 'zakladka3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
