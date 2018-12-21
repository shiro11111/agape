import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communities-main',
  templateUrl: './communities-main.component.html',
  styleUrls: ['./communities-main.component.css']
})
export class CommunitiesMainComponent implements OnInit {
  navLinks = [
    { path: 'Tab1', label: 'zakladka1' },
    { path: 'Tab2', label: 'zakladka2'},
    { path: 'Tab3', label: 'zakladka3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
