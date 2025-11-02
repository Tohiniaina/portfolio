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
  // L'URL du fichier que vous voulez télécharger
  private readonly cvFilePath = 'assets/Léo_Randriantahina_CV.pdf';

  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Léo Randriantahina - Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }

  downloadCV(): void {
    // 1. Crée un élément 'a' temporaire
    const link = document.createElement('a');

    // 2. Assigne l'URL du fichier
    link.href = this.cvFilePath;

    // 3. Assigne le nom de fichier pour le téléchargement
    // L'attribut 'download' force le téléchargement au lieu de la navigation
    link.download = 'Léo_Randriantahina_CV.pdf';

    // 4. Cache l'élément et l'ajoute brièvement au DOM pour que le clic fonctionne
    link.style.display = 'none';
    document.body.appendChild(link);

    // 5. Simule le clic pour déclencher le téléchargement
    link.click();

    // 6. Nettoie l'élément créé
    document.body.removeChild(link);
  }
}
