import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';
  private _theme: Theme = 'dark';

  get isDark(): boolean {
    return this._theme === 'dark';
  }

  get currentTheme(): Theme {
    return this._theme;
  }

  setTheme(theme: Theme): void {
    this._theme = theme;
    localStorage.setItem(this.STORAGE_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleTheme(): void {
    const next = this._theme === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  initTheme(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
    if (stored === 'dark' || stored === 'light') {
      this._theme = stored;
    } else {
      this._theme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', this._theme);
  }
}
