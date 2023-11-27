import { Component, OnInit } from '@angular/core';
import { Livre } from '../../classes/livre';
import { Category } from '../../enum/category';
import { LivreService } from '../../services/livre.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css'],
})
export class LivreComponent implements OnInit {
  categories = Object.values(Category);
  selectedCategory: Category = Category.All;
  livres: Livre[] = [];

  constructor(private livreService: LivreService) {}

  ngOnInit(): void {
    this.getLivres();
  }

  getLivres(): void {
    this.livreService.getLivres().subscribe((livres) => (this.livres = livres));
  }

  add(titre: string, auteur: string, prix: number, categorie: Category): void {
    titre = titre.trim();
    auteur = auteur.trim();
    if (!titre || !auteur || !prix || !categorie) {
      return;
    }
    this.livreService
      .addLivre({ id: 0, titre, auteur, categorie, prix } as Livre)
      .subscribe((livre) => {
        this.livres.push(livre);
      });
  }

  delete(livre: Livre): void {
    this.livres = this.livres.filter((l) => l !== livre);
    this.livreService.deleteLivre(livre);
  }
}
