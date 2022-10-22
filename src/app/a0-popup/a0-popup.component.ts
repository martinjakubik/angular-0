import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a0-popup',
  templateUrl: './a0-popup.component.html',
  styleUrls: ['./a0-popup.component.css']
})
export class A0PopupComponent implements OnInit {

  visible: boolean;
  items: string[];

  constructor() {
    this.visible = false;
    this.items = ['blank'];
   }

  ngOnInit(): void {
  }
}
