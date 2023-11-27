import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../../services/personne.service';
import { Personne } from '../../classes/personne';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css'],
})
export class ListPersonneComponent implements OnInit {
  personnes: Personne[] = [];

  constructor(private personneService: PersonneService) {}

  ngOnInit() {
    this.fetchPersonnes();
  }

  fetchPersonnes() {
    this.personneService.getPersonnes().subscribe(
      (data: Personne[]) => (this.personnes = data),
      (error) => console.error('Error fetching personnes:', error)
    );
  }
}
