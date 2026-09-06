import { Component } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {
  projects = {} as Project[];

  constructor(private projectService: ProjectsService) {
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
