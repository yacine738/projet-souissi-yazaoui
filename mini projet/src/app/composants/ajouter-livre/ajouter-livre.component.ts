import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Livre } from '../../classes/livre';
import { Category } from '../../enum/category';
import { LivreService } from '../../services/livre.service';

@Component({
  selector: 'app-ajouter-livre',
  templateUrl: './ajouter-livre.component.html',
  styleUrls: ['./ajouter-livre.component.css'],
})
export class AjouterLivreComponent implements OnInit {
  livreForm!: FormGroup;
  categories = Object.values(Category);
  livres: Livre[] = [];

  constructor(private fb: FormBuilder, private livreService: LivreService) {}

  ngOnInit() {
    this.livreForm = this.fb.group({
      id: [0, Validators.required],
      titre: [
        'Romeo and Juliet',
        [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')],
      ],
      auteur: ['', Validators.required], // Add validation for the author
      categorie: [Category.Romance],
      prix: [0, [Validators.required, Validators.min(17)]],
    });

    this.livreForm
      .get('titre')
      ?.valueChanges.subscribe((data) => console.log(data));
  }

  public get idLivre() {
    return this.livreForm.get('id');
  }

  public get titreLivre() {
    return this.livreForm.get('titre');
  }

  isValidPattern() {
    return this.titreLivre?.errors?.['pattern'] && this.titreLivre?.dirty;
  }

  public get autLivre() {
    return this.livreForm.get('auteur');
  }

  isValidRequired() {
    return this.autLivre?.errors?.['required'] && this.autLivre?.dirty;
  }

  public get prixLivre() {
    return this.livreForm.get('prix');
  }

  isValidPrix() {
    return this.prixLivre?.errors?.['min'] && this.prixLivre?.dirty;
  }

  onresetForm() {
    this.livreForm.reset();
    this.livreForm.get('categorie')?.setValue(Category.SciFi);
  }

  onSubmitForm() {
    this.livreService
      .addLivre(this.livreForm.value)
      .subscribe((data) => this.livres.push(data));
  }
}
