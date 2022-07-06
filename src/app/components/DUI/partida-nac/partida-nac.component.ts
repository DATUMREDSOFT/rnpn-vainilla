import { Component, Input, OnInit } from '@angular/core';
import { DatosPartidaResponse } from 'src/app/interface/dui.interface';

@Component({
  selector: 'app-partida-nac',
  templateUrl: './partida-nac.component.html',
  styleUrls: ['./partida-nac.component.scss']
})
export class PartidaNacComponent implements OnInit {

  @Input() datosPartida?:DatosPartidaResponse = {
      "dui":    "",
      "noSoli": "",
      "nom1":   "",
      "nom2":   "",
      "ape1":   "",
      "ape2":   "",
      "sexo": "",
      "nomMadre": "",
      "nomPadre": "",
      "status": "",
      "marginacion": "",
      "rollo": "",
      "rolloSec": null,
      "anio": "",
      "libro": "",
      "folio": "",
      "partida": "",
      "deptoLibro": "",
      "muniLibro": "",
      "fecNac": "",
      "deptoNac": "",
      "muniNac": "",
      "cuadro": ""
  };

  constructor(  ) { }

  ngOnInit(): void {
  }

}









