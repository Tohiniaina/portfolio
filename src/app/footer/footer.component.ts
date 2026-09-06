import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public currentYear: number = new Date().getFullYear();
  scrollToElement(target: string): void {
    const ele = document.getElementById(target);
    ele?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
