import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from './shared/shared.module';
import { TabViewModule } from 'primeng/tabview';

import { AppComponent } from './app.component';
import { DatosDUIComponent } from './components/DUI/datos-dui/datos-dui.component';
import { DUIComponent } from './pages/dui/dui.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PartidaNacComponent } from './components/DUI/partida-nac/partida-nac.component';
import { DatosTramiteComponent } from './components/DUI/datos-tramite/datos-tramite.component';


@NgModule({
  declarations: [
    AppComponent,
    DatosDUIComponent,
    DatosTramiteComponent,
    DUIComponent,
    NotFoundComponent,
    PartidaNacComponent
  ],
  imports: [
    AppRoutingModule,
    BreadcrumbModule,
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    DividerModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ImageModule,
    InputTextModule,
    SharedModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
