import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuiService {

  private _url:string = '';

  private _datosDui:any = {};
  private _datosTramites:any = {};
  private _datosPartida:any = {};

  constructor( private http: HttpClient) { 
     //Llamada a los 
     this.http.get('https://api.giphy.com/v1/gifs/search?apiKey=1KyNl3fjOwA3pxGhW8Xh7zqbYYLmx7CC&q=cheese&limit=10')
        .subscribe( (resp: any) => {
            console.log( resp );
        } )
  }

  get datodDui() {
    return this._datosDui;
  }

  get datosTramite() {
    return this._datosTramites;
  }

  get datosPartida() {
    return this._datosPartida;
  }
}
