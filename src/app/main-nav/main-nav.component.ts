import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  
  constructor() { }
  selectedItem = 'home';

  
  ngOnInit() {
  }
  
}
