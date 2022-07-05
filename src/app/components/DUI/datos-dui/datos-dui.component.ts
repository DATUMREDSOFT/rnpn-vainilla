import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { DuiService } from 'src/app/services/dui.service';

@Component({
  selector: 'app-datos-dui',
  templateUrl: './datos-dui.component.html',
  styleUrls: ['./datos-dui.component.scss']
})
export class DatosDUIComponent implements OnInit {

  constructor( private duiService: DuiService ) { 
    
  }

  ngOnInit(): void {
  }

}
