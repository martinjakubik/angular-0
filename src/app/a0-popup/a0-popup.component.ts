import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-a0-popup',
  templateUrl: './a0-popup.component.html',
  styleUrls: ['./a0-popup.component.css']
})
export class A0PopupComponent implements OnInit {

  id: string;
  items: string[];

  constructor() {
    this.id = '';
    this.items = ['blank'];
   }

  ngOnInit(): void {
  }

  setId(id:string) {
    this.id = id;
  }
}
