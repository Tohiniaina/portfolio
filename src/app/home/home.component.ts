import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly cvFilePath = 'assets/Léo_Randriantahina_CV.pdf';

  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Léo Randriantahina - Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }

  scrollToProjects(): void {
    document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = this.cvFilePath;
    link.download = 'Léo_Randriantahina_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
