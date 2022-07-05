import { Component, OnInit } from '@angular/core';
import { DuiService } from 'src/app/services/dui.service';

@Component({
  selector: 'app-datos-tramite',
  templateUrl: './datos-tramite.component.html',
  styleUrls: ['./datos-tramite.component.scss']
})
export class DatosTramiteComponent implements OnInit {

  constructor(private duiService: DuiService) { }

  ngOnInit(): void {
  }

}
