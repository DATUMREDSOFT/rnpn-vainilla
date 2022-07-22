import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DUIComponent } from './pages/dui/dui.component';
import { ProfesionOficioComponent } from './pages/profesion-oficio/profesion-oficio.component';

const routes: Routes = [
  {
    path: '',
    component: DUIComponent
  },
  {
    path: 'DUI',
    component: DUIComponent
  },
  {
    path: 'profesion-oficio',
    component: ProfesionOficioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
