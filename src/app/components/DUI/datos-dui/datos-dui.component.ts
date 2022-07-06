import { Component, Input, OnInit } from '@angular/core';
import { DatosDuiResponse } from 'src/app/interface/dui.interface';


@Component({
  selector: 'app-datos-dui',
  templateUrl: './datos-dui.component.html',
  styleUrls: ['./datos-dui.component.scss']
})
export class DatosDUIComponent implements OnInit {
  
  @Input() datosDui?: DatosDuiResponse = {
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

  constructor( ) { 
    
  }

  ngOnInit(): void {
  }

}
