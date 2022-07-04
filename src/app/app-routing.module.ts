import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DUIComponent } from './pages/dui/dui.component';

const routes: Routes = [
  {
    path: '',
    component: DUIComponent
  },
  {
    path: 'DUI',
    component: DUIComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
