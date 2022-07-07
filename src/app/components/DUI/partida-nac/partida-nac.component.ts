import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatosPartidaResponse } from 'src/app/interface/dui.interface';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-partida-nac',
  templateUrl: './partida-nac.component.html',
  styleUrls: ['./partida-nac.component.scss']
})
export class PartidaNacComponent implements OnInit {

  closeResult = '';
  @Input() datosPartida?:DatosPartidaResponse = {
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

  constructor( private modalService: NgbModal ) { }

  ngOnInit(): void {
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlDataPartida');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save(`reporte-datos-partida-dui-${this.datosPartida?.dui}.pdf`);
    });
  }

  //Modal 
  open(content:any) {
    this.modalService.open(content, { centered: true, size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}









