import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {MenubarModule} from 'primeng/menubar';
import { ModalPruebaComponent } from './modal-prueba/modal-prueba.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ModalPruebaComponent
  ],
  imports: [
    CommonModule,
    AvatarGroupModule,
    AvatarModule,
    MenubarModule,
    FontAwesomeModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ModalPruebaComponent
  ]
})
export class SharedModule { }
