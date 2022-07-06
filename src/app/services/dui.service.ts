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
    console.log(dui);
    this._datosDui = {
      "dui": "044021771",
      "numeroSolicitud": "12356",
      "nom1": "RENE",
      "nom2": "GUILLERMO",
      "ape1": "ECHEVERRIA",
      "ape2": "MIRANDA",
      "sexo": "M",
      "estadoFami": "1",
      "conyugue": null,
      "nombMadr": "MARIA MAGDALENA MIRANDA",
      "nombPadr": "FRANCISCO ECHEVERRIA",
      "fechNaci": "12/01/1991",
      "nombPaisNaci": "EL SALVADOR",
      "nombDeptNaci": "SAN SALVADOR",
      "nombMuniNaci": "SAN SALVADOR",
      "estadoCiudadano": "1",
      "profesion": "ESTUDIANTE",
      "peso": "70",
      "estatura": "170",
      "conocidoPor": null,
      "residencia": "COL. JARDINES DE SELL-SUTT",
      "calle": "Dyesa",
      "casa": "15",
      "zip": "1040100000T",
      "nombPaisResidencia": "EL SALVADOR",
      "nombDeptResidencia": "SAN SALVADOR",
      "nombMuniResidencia": "ILOPANGO",
      "canton": null,
      "caserio": null
    }
    return this._datosDui;

  }

  buscarDatosPartida = (dui:string) => {
    console.log(dui);
    this._datosPartida = {
        "dui": "044021771",
        "noSoli": "223564",
        "nom1": "RENE",
        "nom2": "GUILLEMRO",
        "ape1": "ECHEVERRIA",
        "ape2": "MIRANDA",
        "sexo": "M",
        "nomMadre": "MARIA MAGDALENA MIRANDA",
        "nomPadre": "FRANCISCO ECHEVERRIA",
        "status": "V",
        "marginacion": "N",
        "rollo": "1",
        "rolloSec": null,
        "anio": "1991",
        "libro": "8A",
        "folio": "338",
        "partida": "336",
        "deptoLibro": "SAN SALVADOR",
        "muniLibro": "SAN SALVADOR",
        "fecNac": "12/01/1991",
        "deptoNac": "SAN SALVADOR",
        "muniNac": "SAN SALVADOR",
        "cuadro": "5569842"
    }
    return this._datosPartida;
  }

  buscarDatosTramite = (dui:string) => {
     this._datosTramites = {
      "tipoTramite": "RENOVACION",
      "status": "DUI ENTREGADO",
      "partMarc": "0",
      "folio": "905321",
      "fechaReg": "04/12/2020",
      "fechaEmi": "04/12/2020",
      "fechaEntr": "04/12/2020",
      "fechaVenc": "03/12/2028",
      "centroServi": "GALERIAS"
    }
    return this._datosTramites;
  }

  get datodDui() {
    return {...this._datosDui};
  }

  get datosTramite() {
    return {...this._datosTramites};
  }

  get datosPartida() {
    return {...this._datosPartida};
  }
}
