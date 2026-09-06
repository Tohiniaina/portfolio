import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  isDark = false;
  constructor() {}

  ngOnInit(): void {
    const stored = localStorage.getItem('portfolio-theme');
    this.isDark = stored === null ? true : stored === 'dark';
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
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

  closeMenuOnMobile(): void {
    if (window.innerWidth <= 768) {
      this.menuOpen = false;
    }
  }
}