import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: 'CodexConstruction',
      frontEnd: 'Angular JS',
      backEnd: 'SpringBoot (JAVA)',
      database: 'PostgreSQL',
      description: "Une application de gestion pour une entreprise BTP, permettant de gérer les aspects techniques et financiers des projets de construction. Elle offre la création et la visualisation de devis, le suivi des travaux, des tableaux de bord de suivi et des statistiques.",
      projectLink: 'https://github.com/Tohiniaina/CodexConstructionAngular',
      pictures: []
    },
    {
      id: 1,
      name: 'Okaz',
      frontEnd: 'React JS/ Ionic',
      backEnd: 'SpringBoot (JAVA)',
      database: 'PostgreSQL',
      description: "Okaz est une multi-plateforme dédiée au vente de voiture d'occasion ou neuve. Cette application permet aux utilisateurs de consulter des annonces, de publier des annonces de vente, de rechercher des voitures selon les critères souhaités, et même de communiquer avec les propriétaires des véhicules.",
      projectLink: 'https://github.com/Tohiniaina/Tomobilina',
      pictures: []
    },
    {
      id: 2,
      name: 'Poketra',
      frontEnd: 'JSP',
      backEnd: 'JAVA',
      database: 'PostgreSQL',
      description: "Poketra est une application back-office dédiée à la fabrication et de la vente de sacs malagasy. Cette application permet de gerer les matières premieres (y compris les stocks), la fabrication, la vente et surtout l'etats de stock.",
      projectLink: 'https://github.com/Tohiniaina/Poketra',
      pictures: []
    },
    {
      id: 3,
      name: 'SolarPanel Manager',
      frontEnd: 'JSP',
      backEnd: 'JAVA',
      database: 'PostgreSQL',
      description: "SolarPanel Manager est une application de gestion d'energie solaire. Grâce à des fonctionnalités avancées telles que la surveillance en temps réel, l'analyse des performances et la prévision des coupures mon application pemet aux utilisateurs de maximiser leur production d'énergie solaire.",
      projectLink: 'https://github.com/Tohiniaina/SolarPanel',
      pictures: []
    },
    {
      id: 4,
      name: 'Katsaka',
      frontEnd: 'ASP .NET',
      backEnd: 'C#',
      database: 'PostgreSQL',
      description: "Katsaka est une application de gestion de suivi de culture de maÏs qui permet de suivre en temps réel la culture(rapport mensuel, les anomalies, ...), de gerer les dépenses des besoins et surtout faire la prevision de recolte.",
      projectLink: 'https://github.com/Tohiniaina/Katsaka',
      pictures: []
    },
    {
      id: 5,
      name: 'Gestion Commerciale Entreprise',
      frontEnd: 'PHP',
      backEnd: 'CodeIgniter',
      database: 'PostgreSQL',
      description: "Cette application est un outil complet conçu pour automatiser et optimiser les processus commerciaux d'un entreprise. Elle offre une suite intégrée de fonctionnalités pour gérer les ventes, les achats et les stocks, permettant aux entreprises de centraliser leurs opérations commerciales en un seul endroit.",
      projectLink: 'https://github.com/Tohiniaina/Gestion_Commerciale_Entreprise',
      pictures: []
    }
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id == id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: '+id);
    }

    return project;
  }
}
