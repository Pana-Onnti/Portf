import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { tap } from 'rxjs';
import { Educacion } from 'src/app/interface/educacion';
import { CursosService } from 'src/app/services/cursos.service';
import { Curso } from 'src/app/interface/cursos';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  educacions! : Educacion [] ;
  cursos! : Curso[];

  constructor(private educacionSvc: ServiceService,private cursosSvc: CursosService ) { }

  ngOnInit(): void {
    this.educacionSvc.getEducacion()
    .pipe(
      tap ((educacions : Educacion[]) => this.educacions =  educacions )
    )
    .subscribe();

    this.cursosSvc.getCursos()
    .pipe(
      tap((cursos:Curso[])=> this.cursos = cursos )
    )
    .subscribe();

  }


}
