import { Injectable } from '@angular/core';
import { Personne } from '../classes/personne';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:3000/personnes";

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  constructor(private http: HttpClient) {}

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(URL);
  }

  addNewPersonne(personne: Personne): Observable<Personne> {
    return this.http.post<Personne>(URL, personne);
  }
}
