import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Experiencias } from 'src/app/interface/experiencias';
import { ExperienciasService } from 'src/app/services/experiencias.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  experiencias! : Experiencias[];
  constructor(private experienciasSvc:ExperienciasService) { }

  ngOnInit(): void {
    this.experienciasSvc.getExperiencias()
    .pipe(
      tap((experiencias:Experiencias[]) => this.experiencias = experiencias )
    )
    .subscribe()
  }

}
