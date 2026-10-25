import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from './_services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./edit-form.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {}
  ngOnInit(): void {
    this.themeService.initTheme();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  title = 'Codex';
  showScrollTop = false;
}
