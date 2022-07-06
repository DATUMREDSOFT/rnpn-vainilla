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

  constructor( private http: HttpClient) { /*
    
    console.log("Inicia el contructor");
    const dui = '044021771';
    const urlDatosDUI:string = `https://service-datos-dui-3-api-datos-personas.apps-crc.testing/api/datosdui?dui=${dui}`;
    const urlDatosTramite:string = `https://service-datos-tramite-1-api-datos-personas.apps-crc.testing/api/datostramite?dui=${dui}`;
    const urlDatosPartida:string = `https://service-datos-partida-1-api-datos-personas.apps-crc.testing/api/datospartida?dui=${dui}`;

    this.http.get<DatosDuiResponse>(urlDatosDUI )
        .subscribe( resp  => {
            console.log('-------------');
            console.log( 'Datos Dui con tipo de dato');
            console.log( resp );
            console.log( JSON.stringify(resp, null, 4) );
            console.log( JSON.stringify(resp) );
            console.log('-------------');
      } )

      this.http.get<DatosPartidaResponse>(urlDatosPartida)
        .subscribe( resp => {
            console.log('-------------');
            console.log( 'Datos partida con tipo de dato: ');
            console.log( resp );
            console.log( JSON.stringify(resp, null, 4) );
            console.log( JSON.stringify(resp) );;
            console.log('-------------');

      } )

      this.http.get<DatosTramiteResponse>(urlDatosTramite)
      .subscribe( resp => {
          console.log('-------------');
          console.log( 'Datos tramite con tipo de dato: ');
          console.log( resp );
          console.log( JSON.stringify(resp, null, 4) );
          console.log( JSON.stringify(resp) );
          console.log('-------------');
      } )


      this.http.get(urlDatosDUI )
      .subscribe( resp  => {
          console.log('-------------');
          console.log( 'Datos Dui sin tipo de dato');
          console.log( resp );
          console.log( JSON.stringify(resp, null, 4) );
          console.log( JSON.stringify(resp) );
          console.log('-------------');
    } )

    this.http.get(urlDatosPartida)
      .subscribe( resp => {
          console.log('-------------');
          console.log( 'Datos partida sin tipo de dato: ');
          console.log( resp );
          console.log( JSON.stringify(resp, null, 4) );
          console.log( JSON.stringify(resp) );
          console.log('-------------');

    } )

    this.http.get(urlDatosTramite)
    .subscribe( resp => {
        console.log('-------------');
        console.log( 'Datos tramite sin  tipo de dato: ');
        console.log( resp );
        console.log( JSON.stringify(resp) );
        console.log('-------------');
    } )

      console.log('Fin del constructor');

      */
  } 

  buscarDatosDui =  (dui:string) => {
    const urlDatosDUI:string = `https://service-datos-dui-3-api-datos-personas.apps-crc.testing/api/datosdui?dui=${dui}`;
    
    this.http.get<DatosDuiResponse>(urlDatosDUI )
      .subscribe( resp  => {
          console.log('-------------');
          console.log( 'Datos Dui con tipo de dato');
          console.log( JSON.stringify(resp, null, 4) );
          this._datosDui = resp; 
          console.log('-------------');
      })

    return this._datosDui;

  }

  buscarDatosPartida = (dui:string) => {
    const urlDatosPartida:string = `https://service-datos-partida-1-api-datos-personas.apps-crc.testing/api/datospartida?dui=${dui}`;
    this.http.get<DatosPartidaResponse>(urlDatosPartida)
      .subscribe( resp => {
          console.log('-------------');
          console.log( 'Datos partida con tipo de dato: ');
          console.log( JSON.stringify(resp, null, 4) );
          this._datosPartida = resp;
          console.log('-------------');
      })

    return this._datosPartida;
  }

  buscarDatosTramite = (dui:string) => {
     const urlDatosTramite:string = `https://service-datos-tramite-1-api-datos-personas.apps-crc.testing/api/datostramite?dui=${dui}`;
     this.http.get<DatosTramiteResponse>(urlDatosTramite)
      .subscribe( resp => {
          console.log('-------------');
          console.log( 'Datos tramite con tipo de dato: ');
          console.log( JSON.stringify(resp, null, 4) );
          this._datosTramites = resp;
          console.log('-------------');
     })

     return this._datosTramites;
  }

}
