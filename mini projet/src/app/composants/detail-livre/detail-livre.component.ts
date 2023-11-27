import { Component, Input } from '@angular/core';
import { Livre } from 'src/app/classes/livre';

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.css'],
})
export class DetailLivreComponent {
  @Input()
  livre!: Livre;

  constructor() {}
}
