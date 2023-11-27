import { Component, Input } from '@angular/core';
import { Livre } from '../../classes/livre';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css'],
})
export class ListLivreComponent {
  @Input()
  livres!: Livre[];

  trackByFn(livre: Livre): number {
    return livre.id;
  }
}
