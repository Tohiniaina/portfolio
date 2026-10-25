import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: 'Sentinelle Intelligente',
      frontEnd: 'React',
      backEnd: 'FastAPI (Python)',
      database: 'PostgreSQL',
      description: "Prototype d'analyse vidéo et audio en temps réel avec YOLO et YAMNet, intégrant un tableau de bord décisionnel, une cartographie des alertes et un module de simulation des risques environnementaux et économiques.",
      projectLink: '',
      pictures: []
    },

    {
      id: 1,
      name: 'CodexConstruction',
      frontEnd: 'Angular JS',
      backEnd: 'SpringBoot (JAVA)',
      database: 'PostgreSQL',
      description: "Une application de gestion pour une entreprise BTP, permettant de gérer les aspects techniques et financiers des projets de construction. Elle offre la création et la visualisation de devis, le suivi des travaux, des tableaux de bord de suivi et des statistiques.",
      projectLink: 'https://github.com/Tohiniaina/CodexConstructionAngular',
      pictures: []
    },

    {
      id: 2,
      name: 'Okaz',
      frontEnd: 'React JS / Ionic',
      backEnd: 'SpringBoot (JAVA)',
      database: 'PostgreSQL',
      description: "Okaz est une plateforme dédiée à la vente de véhicules neufs et d'occasion. Elle permet aux utilisateurs de consulter et publier des annonces, rechercher des véhicules selon différents critères et communiquer avec les propriétaires des véhicules.",
      projectLink: 'https://github.com/Tohiniaina/Tomobilina',
      pictures: []
    },

    // {
    //   id: 3,
    //   name: 'Poketra',
    //   frontEnd: 'JSP',
    //   backEnd: 'JAVA',
    //   database: 'PostgreSQL',
    //   description: "Poketra est une application back-office dédiée à la fabrication et à la vente de sacs malagasy. Elle permet de gérer les matières premières, les stocks, la fabrication, les ventes et les états de stock.",
    //   projectLink: 'https://github.com/Tohiniaina/Poketra',
    //   pictures: []
    // },

    // {
    //   id: 4,
    //   name: 'SolarPanel Manager',
    //   frontEnd: 'JSP',
    //   backEnd: 'JAVA',
    //   database: 'PostgreSQL',
    //   description: "SolarPanel Manager est une application de gestion d'énergie solaire permettant la surveillance en temps réel, l'analyse des performances et la prévision des coupures afin d'optimiser la production d'énergie solaire.",
    //   projectLink: 'https://github.com/Tohiniaina/SolarPanel',
    //   pictures: []
    // },

    // {
    //   id: 5,
    //   name: 'Katsaka',
    //   frontEnd: 'ASP .NET',
    //   backEnd: 'C#',
    //   database: 'PostgreSQL',
    //   description: "Katsaka est une application de suivi de culture de maïs permettant de suivre la culture, les anomalies et les dépenses, ainsi que de réaliser des prévisions de récolte.",
    //   projectLink: 'https://github.com/Tohiniaina/Katsaka',
    //   pictures: []
    // },

    {
      id: 6,
      name: 'Gestion Commerciale Entreprise',
      frontEnd: 'PHP',
      backEnd: 'CodeIgniter',
      database: 'PostgreSQL',
      description: "Cette application est un outil de gestion commerciale permettant d'automatiser et de centraliser les processus de vente, d'achat et de gestion des stocks.",
      projectLink: 'https://github.com/Tohiniaina/Gestion_Commerciale_Entreprise',
      pictures: []
    }
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    const project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError(
        'There is no project that matches the id: ' + id
      );
    }

    return project;
  }
}