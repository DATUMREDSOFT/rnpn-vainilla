import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataFirmaResponse, DataFotoResponse, DatosTramiteResponse } from 'src/app/interface/dui.interface';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-datos-tramite',
  templateUrl: './datos-tramite.component.html',
  styleUrls: ['./datos-tramite.component.scss']
})
export class DatosTramiteComponent implements OnInit {

  closeResult = '';
  @Input() datosTramite?: DatosTramiteResponse = {
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

  @Input() dui?: string = '';

  @Input() dataFoto:DataFotoResponse = {
    photo: ''
  }

  @Input() dataFirma:DataFirmaResponse = {
    signature: ''
  }

  constructor( private modalService: NgbModal ) { }

  ngOnInit(): void {
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlDataTramite');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save(`reporte-datos-tramite-dui-${this.dui}.pdf`);
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
