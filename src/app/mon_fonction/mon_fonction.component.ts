import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mon_fonction',
  templateUrl: './mon_fonction.component.html',
  styleUrls: ['./mon_fonction.component.css']
})
export class MonFonctionComponent {
  flippedCard: number | null = null;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Léo Randriantahina - What I do');
  }

  toggleCard(index: number): void {
    this.flippedCard = this.flippedCard === index ? null : index;
  }
}
