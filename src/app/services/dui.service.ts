import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataFirmaResponse, DataFotoResponse, DatosDuiResponse, DatosPartidaResponse, DatosTramiteResponse } from '../interface/dui.interface';
import { DomSanitizer } from '@angular/platform-browser';

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

  private _imgPerfil: DataFotoResponse = {
    photo: ''
  }

  private _imgFirma: DataFirmaResponse = {
    signature: ''
  }

  constructor( private http: HttpClient, private sanitizer: DomSanitizer ) { 
  } 

  buscarDatosDui =  (dui:string) => {
  
    const urlDatosDUI:string = `http://service-datos-dui-1-api-datos-personas.apps.uda01.rnpn.gob.sv/api/datosdui?dui=${dui.trim()}`;
    
    this.http.get<DatosDuiResponse>(urlDatosDUI )
      .subscribe( resp  => {
          this._datosDui = resp; 
          console.log( JSON.stringify(this._datosDui, null, 4) );
      })
    

      // this._datosDui = {
      //   "dui": "044021771",
      //   "numeroSolicitud": "12356",
      //   "nom1": "RENE",
      //   "nom2": "GUILLERMO",
      //   "ape1": "ECHEVERRIA",
      //   "ape2": "MIRANDA",
      //   "sexo": "M",
      //   "estadoFami": "1",
      //   "conyugue": null,
      //   "nombMadr": "MARIA MAGDALENA MIRANDA",
      //   "nombPadr": "FRANCISCO ECHEVERRIA",
      //   "fechNaci": "12/01/1991",
      //   "nombPaisNaci": "EL SALVADOR",
      //   "nombDeptNaci": "SAN SALVADOR",
      //   "nombMuniNaci": "SAN SALVADOR",
      //   "estadoCiudadano": "1",
      //   "profesion": "ESTUDIANTE",
      //   "peso": "70",
      //   "estatura": "170",
      //   "conocidoPor": null,
      //   "residencia": "COL. JARDINES DE SELL-SUTT",
      //   "calle": "Dyesa",
      //   "casa": "15",
      //   "zip": "1040100000T",
      //   "nombPaisResidencia": "EL SALVADOR",
      //   "nombDeptResidencia": "SAN SALVADOR",
      //   "nombMuniResidencia": "ILOPANGO",
      //   "canton": null,
      //   "caserio": null
      // }

    return this._datosDui;
    
  }

  buscarDatosTramite = (dui:string) => {

    const urlDatosTramite:string = `http://service-datos-tramite-1-api-datos-personas.apps.uda01.rnpn.gob.sv/api/datostramite?dui=${dui.trim()}`;
    this.http.get<DatosTramiteResponse>(urlDatosTramite)
     .subscribe( resp => {
         this._datosTramites = resp;
         console.log( JSON.stringify(this._datosTramites, null, 4) );
    })


    // this._datosTramites = {
    //   "tipoTramite": "RENOVACION",
    //   "status": "DUI ENTREGADO",
    //   "partMarc": "0",
    //   "folio": "905321",
    //   "fechaReg": "04/12/2020",
    //   "fechaEmi": "04/12/2020",
    //   "fechaEntr": "04/12/2020",
    //   "fechaVenc": "03/12/2028",
    //   "centroServi": "GALERIAS"
    // }
    return this._datosTramites;
  }

  buscarDatosPartida = (dui:string) => {
  
    const urlDatosPartida:string = `http://service-datos-partida-1-api-datos-personas.apps.uda01.rnpn.gob.sv/api/datospartida?dui=${dui.trim()}`;
    this.http.get<DatosPartidaResponse>(urlDatosPartida)
      .subscribe( resp => {
          this._datosPartida = resp;
          console.log( JSON.stringify(this._datosPartida, null, 4) )
      })
  
    //   this._datosPartida = {
    //     "dui": "044021771",
    //     "noSoli": "223564",
    //     "nom1": "RENE",
    //     "nom2": "GUILLEMRO",
    //     "ape1": "ECHEVERRIA",
    //     "ape2": "MIRANDA",
    //     "sexo": "M",
    //     "nomMadre": "MARIA MAGDALENA MIRANDA",
    //     "nomPadre": "FRANCISCO ECHEVERRIA",
    //     "status": "V",
    //     "marginacion": "N",
    //     "rollo": "1",
    //     "rolloSec": null,
    //     "anio": "1991",
    //     "libro": "8A",
    //     "folio": "338",
    //     "partida": "336",
    //     "deptoLibro": "SAN SALVADOR",
    //     "muniLibro": "SAN SALVADOR",
    //     "fecNac": "12/01/1991",
    //     "deptoNac": "SAN SALVADOR",
    //     "muniNac": "SAN SALVADOR",
    //     "cuadro": "5569842"
    // }
    
    return this._datosPartida;
  }

  buscarImgFoto = (dui: string) => {
    /*Peticion http*/
    const urlDatosFoto:string = `http://service-images-dui-1-api-datos-personas.apps.uda01.rnpn.gob.sv/api/imagesdui/photo?dui=${dui.trim()}`;
    this.http.get<DataFotoResponse>(urlDatosFoto)
      .subscribe( resp => {
        let objectURL = 'data:image/jpeg;base64,' + resp.photo;
        this._imgPerfil = {
          photo: this.sanitizer.bypassSecurityTrustUrl(objectURL)
        };
      })


    // this._imgPerfil = {
    //   photo: 'assets/images/p.jpeg'
    // }; 
    return this._imgPerfil; 
  }

  buscarImgFirma = (dui: string) => {
    /*Peticion http */
    const urlDatosFirma:string = `http://service-images-dui-1-api-datos-personas.apps.uda01.rnpn.gob.sv/api/imagesdui/signature?dui=${dui.trim()}`;
    this.http.get<DataFirmaResponse>(urlDatosFirma)
      .subscribe( resp => {
        let objectURL = 'data:image/jpeg;base64,' + resp.signature;
        this._imgFirma = {
          signature: this.sanitizer.bypassSecurityTrustUrl(objectURL)
        }
      })



    // let objectURL = 'data:image/jpeg;base64,' + imgFirmas.signature;
    // this._imgFirma= {
    //   signature: this.sanitizer.bypassSecurityTrustUrl(objectURL)
    // }



    return this._imgFirma;
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

  limpiarDataFoto(){
    this._imgPerfil= {
      photo: ''
    }  
  }

  limpiarDataFirma(){
    this._imgFirma = {
      signature: ''
    }
  }

 

}
