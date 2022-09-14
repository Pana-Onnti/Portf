import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IniciarSesionComponent } from "./component/iniciar-sesion/iniciar-sesion.component";
import { BodyComponent } from "./component/body/body.component";
import { EducacionComponent } from "./component/educacion/educacion.component";
import { ExperienciaComponent } from "./component/experiencia/experiencia.component";
import { FormularioComponent } from "./component/formulario/formulario.component";
import { ProyectoComponent } from "./component/proyecto/proyecto.component";
import { SkillsComponent } from "./component/skills/skills.component";


const routes : Routes = [
  {path:'' , redirectTo:'/home',pathMatch:'full'},
  {path: 'login', component:IniciarSesionComponent},
  {path: 'home', component:BodyComponent},
  {path: 'home', component:EducacionComponent},
  {path: 'home', component:ExperienciaComponent},
  {path: 'home', component:FormularioComponent},
  {path: 'home', component:ProyectoComponent},
  {path: 'home', component:SkillsComponent},



];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }
