import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
