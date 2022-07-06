import { Component, Input, OnInit } from '@angular/core';
import { DatosTramiteResponse } from 'src/app/interface/dui.interface';

@Component({
  selector: 'app-datos-tramite',
  templateUrl: './datos-tramite.component.html',
  styleUrls: ['./datos-tramite.component.scss']
})
export class DatosTramiteComponent implements OnInit {

  @Input() datosTramite?: DatosTramiteResponse = {
    "tipoTramite": "",
    "status": "",
    "partMarc": "",
    "folio": "",
    "fechaReg": "",
    "fechaEmi": "",
    "fechaEntr": "",
    "fechaVenc": "",
    "centroServi": ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
