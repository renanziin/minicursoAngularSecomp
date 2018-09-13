import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetaModule } from './planeta/planeta.module';
import { HttpClientModule } from '@angular/common/http';
import { GalaxiaComponent } from './galaxia/galaxia.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    GalaxiaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PlanetaModule,
    HttpClientModule,
    ModuloRoteador
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
