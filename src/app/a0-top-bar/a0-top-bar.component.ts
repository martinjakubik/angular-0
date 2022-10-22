import { Component, OnInit } from '@angular/core';
import { A0PopupComponent } from '../a0-popup/a0-popup.component';

interface Menu {
  name: string;
};

@Component({
  selector: 'app-a0-top-bar',
  templateUrl: './a0-top-bar.component.html',
  styleUrls: ['./a0-top-bar.component.css']
})
export class A0TopBarComponent implements OnInit {

  constructor() { }

  aMenus: Menu[] = [
    {
      name: 'File'
    },
    {
      name: 'Edit'
    },
    {
      name: 'View'
    },
    {
      name: 'Tools'
    },
    {
      name: 'Help'
    }
  ];

  ngOnInit(): void {
  }

  showMenu(oMenu: { name: any; }): void {
    console.log(oMenu.name);
  }
}
