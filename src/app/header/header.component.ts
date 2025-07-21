import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;
  constructor(private elementRef: ElementRef) {}

  scrollToElement(target: string): void {
    const ele = document.getElementById(target);
    ele?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenuOnMobile(): void {
    if (window.innerWidth <= 768) {
      this.menuOpen = false;
    }
  }
}
