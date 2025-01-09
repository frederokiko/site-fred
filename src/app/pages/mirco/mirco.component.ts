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
      title: 'titi',
      description: "a compléter"
    },
    {
      id: 2,
      image: 'assets/images/mod2.jpg',
      title: 'popo',
      description: 'a completer'
    },
    {
      id: 3,
      image: 'assets/images/mod3.jpg',
      title: 'popo',
      description: 'a completer'
    },
    {
      id: 4,
      image: 'assets/images/mod4.jpg',
      title: 'popo',
      description: 'a completer'
    },
  ];
}
