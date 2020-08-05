import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sidebarOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  sidebarToggle() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
