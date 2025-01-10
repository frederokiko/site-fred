import { Component } from '@angular/core';

interface Modelisme {
  id: number;
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-mirco',
  imports: [],
  templateUrl: './mirco.component.html',
  styleUrl: './mirco.component.scss'
})
export class MircoComponent {
  modelisme: Modelisme[] = [
    {
      id: 1,
      image: 'assets/images/mod1.jpg',
      title: 'Mazinger Z',
      description: "C'est mon tout premier"
    },
    {
      id: 2,
      image: 'assets/images/mod2.jpg',
      title: 'Mazinger Goldorak',
      description: "J'ai longtemps cherché ce modele qui à fait partie de mon enfance ..."
    },
    {
      id: 3,
      image: 'assets/images/mod3.jpg',
      title: 'Combat de Mazinger',
      description: "J'aime à quelle points on peux réaliser de belles scènes"
    },
    {
      id: 4,
      image: 'assets/images/mod4.jpg',
      title: 'Mon vaisseau Albator ',
      description: 'Je dois encore le peindre'
    },
  ];
}
