import { Component, OnInit } from '@angular/core';
import { DuiService } from 'src/app/services/dui.service';


@Component({
  selector: 'app-dui',
  templateUrl: './dui.component.html',
  styleUrls: ['./dui.component.scss']
})
export class DUIComponent implements OnInit {

  constructor( private duiService: DuiService) { 
  }

  ngOnInit(): void {
  }

  handleClickDui(e:any){
    console.log('Datos Dui');
    console.log(this.duiService.datodDui);
  }

  handleClickPartida(e:any){
    console.log('Datos Partida');
    console.log(this.duiService.datosPartida);
  }

  handleClickTramites(e:any){
    console.log('Datos Tramite');
    console.log(this.duiService.datosTramite);
  }

}
