import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  items: MenuItem[]=[];
  
  constructor() { }
  
  ngOnInit(): void {
    this.items = [
      {
        label:'Home',
        icon:'pi pi-fw pi-home',
        routerLink: ['/DUI']
      },
      {
          label:'DUI',
          icon:'pi pi-fw pi-align-justify',
          routerLink: ['/DUI']
      },
      {
          label:'Mantenimientos',
          icon:'pi pi-fw pi-cog',
          routerLink: ['/profesion-oficio']
      }
    ];
  }

}
