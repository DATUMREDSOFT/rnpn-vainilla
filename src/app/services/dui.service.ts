import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosDuiResponse, DatosPartidaResponse, DatosTramiteResponse } from '../interface/dui.interface';

@Injectable({
  providedIn: 'root'
})
export class DuiService {

  private _datosDui:DatosDuiResponse = {
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

  private _datosTramites:DatosTramiteResponse = {
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
  private _datosPartida:DatosPartidaResponse = {
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

  constructor( private http: HttpClient) { 
  } 

  buscarDatosDui =  (dui:string) => {
    const urlDatosDUI:string = `https://service-datos-dui-3-api-datos-personas.apps-crc.testing/api/datosdui?dui=${dui.trim()}`;
    
    this.http.get<DatosDuiResponse>(urlDatosDUI )
      .subscribe( resp  => {
          this._datosDui = resp; 
          console.log('-------------');
          console.log( 'Datos Dui con tipo de dato');
          console.log( JSON.stringify(resp, null, 4) );
          console.log('-------------');
      })
    return this._datosDui;
  }

  buscarDatosTramite = (dui:string) => {
    const urlDatosTramite:string = `https://service-datos-tramite-1-api-datos-personas.apps-crc.testing/api/datostramite?dui=${dui.trim()}`;
    this.http.get<DatosTramiteResponse>(urlDatosTramite)
     .subscribe( resp => {
         this._datosTramites = resp;
         console.log('-------------');
         console.log( 'Datos tramite con tipo de dato: ');
         console.log( JSON.stringify(resp, null, 4) );
         console.log('-------------');
    })

    return this._datosTramites;
  }

  buscarDatosPartida = (dui:string) => {
    const urlDatosPartida:string = `https://service-datos-partida-1-api-datos-personas.apps-crc.testing/api/datospartida?dui=${dui.trim()}`;
    this.http.get<DatosPartidaResponse>(urlDatosPartida)
      .subscribe( resp => {
          this._datosPartida = resp;
          console.log('-------------');
          console.log( 'Datos partida con tipo de dato: ');
          console.log( JSON.stringify(resp, null, 4) );
          console.log('-------------');
      })
    return this._datosPartida;
  }

 
  limpiarDatoDui() {
    this._datosDui = {
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
  }
    
  
  limpiarDatosTramite() {
    this._datosTramites = {
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
  }
    
  limpiarDatosPartida() {
    this._datosPartida = {
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
  }


  

}
