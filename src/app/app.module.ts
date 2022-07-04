import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { SkillsComponent } from './component/skills/skills.component';
import { MaterialModule } from './material.module';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SkillsComponent,
    EducacionComponent,
    ProyectoComponent,
    FormularioComponent,
    FooterComponent,
    ExperienciaComponent,


  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
