import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-a0-popup',
  templateUrl: './a0-popup.component.html',
  styleUrls: ['./a0-popup.component.css']
})
export class A0PopupComponent implements OnInit {

  id: string;
  @Input() items: string[];

  constructor() {
    this.id = '';
    this.items = ['blank'];
   }

  ngOnInit(): void {
  }
}
