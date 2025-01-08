import { Component } from '@angular/core';
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  gitFrontend: string;
  gitBackend: string;
  images: ProjectImage[];
  school: string;
}

interface ProjectImage {
  src: string;
  alt: string;
  description: string;
}
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  projects = [
    {
      id: 1,
      title: 'Site de Location Immobilière',
      description: 'Site de location de maisons et d\'appartements avec système de recherche multicritères.',
      technologies: ['Angular', 'C#', 'SQL Server'],
      gitFrontend: 'https://github.com/frederokiko/malocation',
      gitBackend: 'https://github.com/frederokiko/LaboLocation_API',
      images: [
        {
          src: 'assets/images/location1.jpg',
          alt: 'Page d\'accueil',
          description: 'Schemas db E/A du site de location'
        },
        {
          src: 'assets/images/location2.jpg',
          alt: 'Page d\'accueil',
          description: 'Schemas relationel du site de location'
        },
        {
          src: 'assets/images/location3.jpg',
          alt: 'Page d\'accueil',
          description: 'Vue des tables de la DB'
        },
        {
          src: 'assets/images/location4.jpg',
          alt: 'Page d\'accueil',
          description: "Page d'acceuil du site"
        },
        {
          src: 'assets/images/location5.jpg',
          alt: 'Page d\'accueil',
          description: "API avec swagger : 51 end-points"
        },
        {
          src: 'assets/images/location6.jpg',
          alt: 'Page d\'accueil',
          description: "Formulaire d'enregistrement des utilsateurs"
        },
        {
          src: 'assets/images/location7.jpg',
          alt: 'Page d\'accueil',
          description: "Résultat d'une recherche"
        },
        {
          src: 'assets/images/location8.jpg',
          alt: 'Page d\'accueil',
          description: 'Capture de mon code en c#'
        },
        // Ajoutez d'autres images ici
      ],
      school: 'TechnofuturTIC - Formation Full Stack Cyber Sécurité'
    },
    {
      id: 2,
      title: 'Application Formula 1 ',
      description: 'Application d\'analyse de données F1 utilisant 13 fichiers CSV couvrant les statistiques depuis 1950.',
      technologies: ['Angular', 'Python', 'FastAPI','SQL Server'],
      gitFrontend: 'https://github.com/frederokiko/my-fastapi-app',
      gitBackend: 'https://github.com/frederokiko/mon_backend_f1',
      images: [
        {
          src: 'assets/images/f1-1.jpg',
          alt: 'Dashboard F1',
          description: 'API F1 , FASTAPI'
        },
        {
          src: 'assets/images/f1-2.jpg',
          alt: 'Dashboard F1',
          description: 'API F1 , FASTAPI'
        },
        {
          src: 'assets/images/f1-3.jpg',
          alt: 'Dashboard F1',
          description: 'Un graphique sur les point du pilote sur toute sa carriere'
        },
        {
          src: 'assets/images/f1-4.jpg',
          alt: 'Dashboard F1',
          description: "Resultats pour l'année selectionée et la position finale"
        },
        {
          src: 'assets/images/f1-5.jpg',
          alt: 'Dashboard F1',
          description: 'Tous les pilotes sont affichés , leur nationalité et les liens wikipedia les concernants'
        },
        {
          src: 'assets/images/f1-6.jpg',
          alt: 'Dashboard F1',
          description: "Voir tous les pilotes d'une écurie et le nombre d'année et de course réalisée pour cette écurie "
        },
        {
          src: 'assets/images/f1-7.jpg',
          alt: 'Dashboard F1',
          description: 'Le nom du circuit , son pays et un lien wikipedia sur son histoire et la géolocalisation du site via les données du fichier csv'
        },
        // Ajoutez d'autres images ici
      ],
      school: 'TechnofuturTIC - Formation Data Analyst'
    }
  ];
}
