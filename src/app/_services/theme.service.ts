import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';

  get isDark(): boolean {
    return this.currentTheme === 'dark';
  }

  get currentTheme(): Theme {
    const stored = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    return 'dark'; // défaut
  }

  setTheme(theme: Theme): void {
    localStorage.setItem(this.STORAGE_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleTheme(): void {
    const next = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  initTheme(): void {
    this.setTheme(this.currentTheme);
  }
}
