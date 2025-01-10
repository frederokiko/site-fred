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
      description: "J'ai mis 11h30 de montage pour ce modele , elle est est motorisée , j'adore"
    },
    {
      id: 2,
      image: 'assets/images/lego2.jpg',
      title: 'Ford mustang',
      description: 'Il faut compter 2h de montage '
    },
    {
      id: 3,
      image: 'assets/images/lego3.jpg',
      title: 'Très beau vaisseau',
      description: "Montage +- 6h et beaucoups de pieces mobile , je l'adore"
    },
    {
      id: 4,
      image: 'assets/images/lego4.jpg',
      title: 'Bugatti Chiron',
      description: '11 heures de montage , magnifique !'
    },
    {
      id: 5,
      image: 'assets/images/lego5.jpg',
      title: 'Lamborghini',
      description: '10 heures de montage '
    },
    {
      id: 6,
      image: 'assets/images/lego6.jpg',
      title: 'F1 Mercedes ',
      description: '2 heures de  montages , trop facile !'
    },
    {
      id: 7,
      image: 'assets/images/lego7.jpg',
      title: 'Grosse F1 Ferrari',
      description: "11 heures de montages , mais j'ai réelement aimé la complèxité du montage"
    },
    {
      id: 8,
      image: 'assets/images/lego8.jpg',
      title: 'Voiture futuriste',
      description: "8 heures de montages , j'adore les autocolants holographique"
    },
    {
      id: 9,
      image: 'assets/images/lego9.jpg',
      title: 'Navette',
      description: 'Un petit cadeaux de ma femme'
    },
    {
      id: 10,
      image: 'assets/images/lego10.jpg',
      title: "Char ce n'est pas du lego",
      description: 'Plan de montage pas extras mais ça passe le temps'
    },
  ];
}



