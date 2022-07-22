import { Component, Directive, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ProfOficioInterface } from 'src/app/interface/ProfOficio';
import { ProfesionOficioApiService } from 'src/app/services/profesion-oficio-api.service';


@Directive({selector: '#dt'})
class ChildDirective {
}

@Component({
  selector: 'app-profesion-oficio',
  templateUrl: './profesion-oficio.component.html',
  styleUrls: ['./profesion-oficio.component.scss']
})
export class ProfesionOficioComponent implements OnInit {

  @ViewChild(ChildDirective)
  table!: Table;

  listaProfesionesOficio: ProfOficioInterface[] = [];

  constructor(private apiMtto: ProfesionOficioApiService) { }

  ngOnInit(): void {
    this.getMethod();
  }

  getMethod() {
    this.apiMtto.getMethod().subscribe(
      (response) => {
        this.listaProfesionesOficio = response.lstCatProfOficio;
        console.log(response);
      },
      (error) => {
        this.listaProfesionesOficio = [];
      }
    );
  }

}
