import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosDuiResponse, DatosPartidaResponse, DatosTramiteResponse } from '../interface/dui.interface';

@Injectable({
  providedIn: 'root'
})
export class DuiService {

  private _datosDui:any = {};
  private _datosTramites:any = {};
  private _datosPartida:any = {};

  constructor( private http: HttpClient) { 
    
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
        console.log( JSON.stringify(resp, null, 4) );
        console.log( JSON.stringify(resp) );
        console.log('-------------');
    } )

      console.log('Fin del constructor');

      
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
