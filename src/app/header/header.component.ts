import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  isDark = false;
  activeSection = '';

  private readonly sectionIds = [
    'abouts',
    'domaines',
    'skills',
    'experience',
    'formation',
    'certifications',
    'projets',
    'contact'
  ];

  constructor() {}

  ngOnInit(): void {
    const stored = localStorage.getItem('portfolio-theme');
    this.isDark = stored === null ? true : stored === 'dark';
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.menuOpen = false;
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    localStorage.setItem('portfolio-theme', this.isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
  }

  scrollToElement(target: string): void {
    const ele = document.getElementById(target);
    ele?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  private updateActiveSection(): void {
    const headerOffset = 140;
    let current = '';

    for (const id of this.sectionIds) {
      const element = document.getElementById(id);
      if (element && element.getBoundingClientRect().top <= headerOffset) {
        current = id;
      }
    }

    this.activeSection = current;
  }
}