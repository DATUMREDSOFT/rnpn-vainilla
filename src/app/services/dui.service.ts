import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosDuiResponse, DatosPartidaResponse } from '../interface/dui.interface';

@Injectable({
  providedIn: 'root'
})
export class DuiService {

  private _datosDui:any = {};
  private _datosTramites:any = {};
  private _datosPartida:any = {};

  constructor( private http: HttpClient) { 

    const dui = '044021771';
    const urlDatosDUI:string = `https://service-datos-dui-3-api-datos-personas.apps-crc.testing/api/datosdui?dui=${dui}`;
    const urlDatosTramite:string = `https://service-datos-tramite-1-api-datos-personas.apps-crc.testing/api/datostramite?dui=${dui}`;
    const urlDatosPartida:string = `https://service-datos-partida-1-api-datos-personas.apps-crc.testing/api/datospartida?dui=${dui}`;

     this.http.get<DatosDuiResponse>(urlDatosDUI )
        .subscribe( (resp ) => {
            console.log( 'Datos Dui' + resp );
            this._datosDui = resp; 
      } )

      this.http.get<DatosPartidaResponse>(urlDatosPartida)
        .subscribe( (resp) => {
            console.log( 'Datos partida: '+ resp );
            this._datosPartida = resp;
      } )
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
