import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-datos-dui',
  templateUrl: './datos-dui.component.html',
  styleUrls: ['./datos-dui.component.scss']
})
export class DatosDUIComponent implements OnInit {

  items: MenuItem[];

  constructor() { 
    this.items = [
      {label:'Categories'},
      {label:'Sports'},
      {label:'Football'}
    ];
  }

  ngOnInit(): void {
  }

}
