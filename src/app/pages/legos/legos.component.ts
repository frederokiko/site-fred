import { Component } from '@angular/core';

interface LegoCreation {
  id: number;
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-legos',
  standalone: true,
  templateUrl: './legos.component.html',
  styleUrl: './legos.component.scss'
})
export class LegosComponent {
  legoCreations: LegoCreation[] = [
    {
      id: 1,
      image: 'assets/images/lego1.jpg',
      title: 'Grue MKII',
      description: "J'ai mis 11h30 de montage pour ce modele"
    },
    {
      id: 2,
      image: 'assets/images/lego2.jpg',
      title: 'Création 2',
      description: 'Description détaillée de la création 2...'
    },
    {
      id: 3,
      image: 'assets/images/lego3.jpg',
      title: 'Création 3',
      description: 'Description détaillée de la création 3...'
    },
    {
      id: 4,
      image: 'assets/images/lego4.jpg',
      title: 'Création 4',
      description: 'Description détaillée de la création 4...'
    },
    {
      id: 5,
      image: 'assets/images/lego5.jpg',
      title: 'Création 5',
      description: 'Description détaillée de la création 5...'
    },
    {
      id: 6,
      image: 'assets/images/lego6.jpg',
      title: 'Création 6',
      description: 'Description détaillée de la création 6...'
    },
  ];
}



