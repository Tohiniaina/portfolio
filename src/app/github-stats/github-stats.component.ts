import { Component } from '@angular/core';

@Component({
  selector: 'app-github-stats',
  templateUrl: './github-stats.component.html',
  styleUrls: ['./github-stats.component.css']
})
export class GithubStatsComponent {
  githubUsername = 'Tohiniaina';
  get chartUrl(): string {
    return `https://ghchart.rshah.org/2ea043/${this.githubUsername}`;
  }
  get statsCardUrl(): string {
    return `https://github-readme-stats.vercel.app/api?username=${this.githubUsername}&show_icons=true&hide_title=true&hide_border=true&bg_color=00000000&title_color=2ea043&icon_color=2ea043&text_color=8b9694`;
  }
  get streakCardUrl(): string {
    return `https://github-readme-streak-stats.herokuapp.com/?user=${this.githubUsername}&hide_border=true&background=00000000&ring=2ea043&fire=2ea043&currStreakLabel=2ea043`;
  }
}
