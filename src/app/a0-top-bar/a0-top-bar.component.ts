import { Component, OnInit } from '@angular/core';
import { A0PopupComponent } from '../a0-popup/a0-popup.component';

interface Menu {
  id: string,
  name: string,
  items: string[]
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
      id: 'menuFile',
      name: 'File',
      items: [
        'New...',
        'Open...',
        'Save',
        'Save As...'
      ]
    },
    {
      id: 'menuEdit',
      name: 'Edit',
      items: [
        'Undo',
        'Redo',
        'Cut',
        'Copy',
        'Paste'
      ]
    },
    {
      id: 'menuView',
      name: 'View',
      items: [
        'Split'
      ]
    },
    {
      id: 'menuTools',
      name: 'Tools',
      items: [
        'Preferences'
      ]
    },
    {
      id: 'menuHelp',
      name: 'Help',
      items: [
        'About...'
      ]
    }
  ];

  NULL_MENU: Menu = {
    id: 'null',
    name: '',
    items: []
  };

  currentMenu: Menu = this.NULL_MENU;

  ngOnInit(): void {
  }

  toggleMenu(menu: Menu): void {
    if (this.currentMenu === menu) {
      this.currentMenu = this.NULL_MENU;
    } else {
      this.currentMenu = menu;
    }
  }
}
