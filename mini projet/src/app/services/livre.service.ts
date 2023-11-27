import { Injectable } from '@angular/core';
import { Livre } from '../classes/livre';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url = "http://localhost:3000/books";

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  deleteLivre(livre: Livre) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(url);
  }

  addLivre(livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(url, livre);
  }
}
