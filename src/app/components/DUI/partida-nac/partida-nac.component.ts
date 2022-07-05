import { Component, OnInit } from '@angular/core';
import { DuiService } from 'src/app/services/dui.service';

@Component({
  selector: 'app-partida-nac',
  templateUrl: './partida-nac.component.html',
  styleUrls: ['./partida-nac.component.scss']
})
export class PartidaNacComponent implements OnInit {

  constructor(  private duiService: DuiService  ) { }

  ngOnInit(): void {
  }

}
