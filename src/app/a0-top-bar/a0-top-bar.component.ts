import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a0-top-bar',
  templateUrl: './a0-top-bar.component.html',
  styleUrls: ['./a0-top-bar.component.css']
})
export class A0TopBarComponent implements OnInit {

  constructor() { }

  aMenus = [
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

}
