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

    const urlDatosDUI:string = `https://service-datos-dui-3-api-datos-personas.apps-crc.testing/api/datosdui`;
    const urlDatosTramite:string = `https://service-datos-tramite-1-api-datos-personas.apps-crc.testing/api/datostramite`;
    const urlDatosPartida:string = `https://service-datos-partida-1-api-datos-personas.apps-crc.testing/api/datospartida`;

    let parameters = {"dui":"044021771"}
    let queryParams = new HttpParams({ fromObject: parameters }); 

     this.http.get<DatosDuiResponse>(urlDatosDUI, {params:queryParams} )
        .subscribe( (resp ) => {
            console.log( 'Datos Dui' + resp );
            this._datosDui = resp; 
      } )

      this.http.get<DatosPartidaResponse>(urlDatosPartida, {params:queryParams} )
        .subscribe( (resp) => {
            console.log( 'Datos partida: '+ resp );
            this._datosPartida = resp;
      } )

      this.http.get<DatosTramiteResponse>(urlDatosTramite, {params:queryParams} )
      .subscribe( (resp) => {
          console.log( 'Datos tramite: '+ resp );
          this._datosTramites = resp;
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
