import { Component, OnInit } from '@angular/core';
import { DatosDuiResponse, DatosPartidaResponse, DatosTramiteResponse } from 'src/app/interface/dui.interface';
import { DuiService } from 'src/app/services/dui.service';


@Component({
  selector: 'app-dui',
  templateUrl: './dui.component.html',
  styleUrls: ['./dui.component.scss']
})
export class DUIComponent implements OnInit {
  dui:string = '';
  datosDui:DatosDuiResponse = {
    "dui": "",
    "numeroSolicitud":"",
    "nom1": "",
    "nom2": "",
    "ape1": "",
    "ape2": "",
    "sexo": "",
    "estadoFami": "",
    "conyugue": null,
    "nombMadr": "",
    "nombPadr": "",
    "fechNaci": "",
    "nombPaisNaci": "",
    "nombDeptNaci": "",
    "nombMuniNaci": "",
    "estadoCiudadano": "",
    "profesion": "",
    "peso": "",
    "estatura": "",
    "conocidoPor": null,
    "residencia": "",
    "calle": "",
    "casa": "",
    "zip": "",
    "nombPaisResidencia": "",
    "nombDeptResidencia": "",
    "nombMuniResidencia": "",
    "canton": null,
    "caserio": null
  };

  datosTramite:DatosTramiteResponse = {
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
  datosPartida:DatosPartidaResponse = {
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
  } ;

  

  constructor( private duiService: DuiService) { 
  }

  ngOnInit(): void {
  }

  handleClickDui(e: any){
    this.datosDui = this.duiService.buscarDatosDui(this.dui);  
    this.datosTramite = this.duiService.buscarDatosTramite(this.dui);
    this.datosPartida = this.duiService.buscarDatosPartida(this.dui);
  }

  handleInput(e: any){
    this.datosDui =  {
      "dui": "",
      "numeroSolicitud":"",
      "nom1": "",
      "nom2": "",
      "ape1": "",
      "ape2": "",
      "sexo": "",
      "estadoFami": "",
      "conyugue": null,
      "nombMadr": "",
      "nombPadr": "",
      "fechNaci": "",
      "nombPaisNaci": "",
      "nombDeptNaci": "",
      "nombMuniNaci": "",
      "estadoCiudadano": "",
      "profesion": "",
      "peso": "",
      "estatura": "",
      "conocidoPor": null,
      "residencia": "",
      "calle": "",
      "casa": "",
      "zip": "",
      "nombPaisResidencia": "",
      "nombDeptResidencia": "",
      "nombMuniResidencia": "",
      "canton": null,
      "caserio": null
    };
  
    this.datosTramite = {
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

    this.datosPartida = {
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

    this.duiService.limpiarDatoDui();
    this.duiService.limpiarDatosTramite();
    this.duiService.limpiarDatosPartida();
  }

}
