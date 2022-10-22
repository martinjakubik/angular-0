import { Component, OnInit } from '@angular/core';
import { A0PopupComponent } from '../a0-popup/a0-popup.component';

interface Menu {
  id: string,
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
      id: 'menuFile',
      name: 'File'
    },
    {
      id: 'menuEdit',
      name: 'Edit'
    },
    {
      id: 'menuView',
      name: 'View'
    },
    {
      id: 'menuTools',
      name: 'Tools'
    },
    {
      id: 'menuHelp',
      name: 'Help'
    }
  ];

  popups:A0PopupComponent[] = [];

  ngOnInit(): void {
    this.aMenus.forEach(menu => {
      const popup = new A0PopupComponent();
      popup.setId(menu.id);
      this.popups.push(popup);
    });
  }

  toggleMenu(oMenu: Menu): void {
    const oPopup = this.popups.find((popup) => {
      return popup.id === oMenu.id;
    });
    if (oPopup) {
      console.log(`setting ${oMenu.name} visible`);
      oPopup.visible = true 
    }
  }
}
