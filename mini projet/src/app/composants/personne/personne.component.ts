// personne.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Affiliation } from '../../classes/affiliation';
import { PersonneService } from '../../services/personne.service';
import { Personne } from '../../classes/personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css'],
})
export class PersonneComponent implements OnInit {
  personneForm!: FormGroup;
  departements = ['IT', 'Management']; // Update with your actual departments

  constructor(
    private fb: FormBuilder,
    private personneService: PersonneService
  ) {}

  ngOnInit() {
    this.personneForm = this.fb.group({
      cin: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date_naissance: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      affiliation: this.fb.group({
        departement: ['', Validators.required],
      }),
    });
  }

  onSubmitForm() {
    const newPersonne: Personne = this.personneForm.value;
    this.personneService.addNewPersonne(newPersonne).subscribe(
      (data: Personne) => {
        // Handle the response as needed
      },
      (error) => {
        console.error('Error adding personne:', error);
      }
    );
  }

  onResetForm() {
    this.personneForm.reset();
  }
}
