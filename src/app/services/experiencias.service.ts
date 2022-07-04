import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencias } from '../interface/experiencias';
@Injectable({
  providedIn: 'root'
})

export class ExperienciasService {
  private apiURL= 'http://localhost:3000/experiencias';
  constructor(private http: HttpClient) {
   }

  getExperiencias():Observable<Experiencias[]>{
    return this.http.get<Experiencias[]>(this.apiURL);
  }

}
