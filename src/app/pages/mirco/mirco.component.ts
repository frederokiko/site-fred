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
    {
      id: 5,
      image: 'assets/images/mod5.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: 'C-3PO et R2-D2 Starwars'
    },
    {
      id: 6,
      image: 'assets/images/mod6.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: 'Cosmonaute Lego avec empreinte de pas sur le sol lunaire'
    },
    {
      id: 7,
      image: 'assets/images/mod7.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: 'La tête dans les étoiles'
    },
    {
      id: 8,
      image: 'assets/images/mod8.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Belle reproduction d'avions diverses"
    },
    {
      id: 9,
      image: 'assets/images/mod9.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Saturne en Lego de très gande taille"
    },
    {
      id: 10,
      image: 'assets/images/mod10.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Je voulais la reprendre mais ! Ca ne rentre pas dans la Clio 😂😂😁"
    },
    {
      id: 11,
      image: 'assets/images/mod11.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Goldorak et le Cyberlab du capitaine Flam"
    },
    {
      id: 12,
      image: 'assets/images/mod12.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Le 1er septembre 1902, le génial réalisateur Georges Méliès nous emmenait vers l’infini et au-delà ' Voyage dans la Lune '"
    },
    {
      id: 13,
      image: 'assets/images/mod13.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Reproduction de la terre en Lego"
    },
    {
      id: 14,
      image: 'assets/images/mod14.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Reproduction avion de chasse Français"
    },
    {
      id: 15,
      image: 'assets/images/mod15.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Diorama magnifique"
    },
    {
      id: 16,
      image: 'assets/images/mod16.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Boeing B-17F Memphis de chez COBI"
    },
    {
      id: 17,
      image: 'assets/images/mod17.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " NASA Discovery Space Shuttle STS-31"
    },
    {
      id: 18,
      image: 'assets/images/mod18.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " La Voie Lactée"
    },
    {
      id: 19,
      image: 'assets/images/mod19.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Apollo Saturne v et le module lunaire Apollo 11"
    },
    {
      id: 20,
      image: 'assets/images/mod20.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Véhicule d’exploration lunaire NASA Apollo - LRV"
    },
    {
      id: 21,
      image: 'assets/images/mod21.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " SpaceX falcon 9 model"
    },
    {
      id: 22,
      image: 'assets/images/mod22.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " F4U-4 Corsair : COBI"
    },
    {
      id: 23,
      image: 'assets/images/mod23.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " MIR et une belle lune qui n'est pas en briques "
    },
    {
      id: 24,
      image: 'assets/images/mod24.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Patch en briques : Apollo 11 "
    },
    {
      id: 25,
      image: 'assets/images/mod25.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " John Fitzgerald Kennedy : pourquoi les États-Unis vont se rendre sur la Lune « non pas parce que c'est facile, mais bien parce que c'est difficile »."
    },
    {
      id: 26,
      image: 'assets/images/mod26.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " L’astronaute dans l’espace et le space dog ! "
    },
    {
      id: 27,
      image: 'assets/images/mod27.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Diorama  << Mer de la Tranquillité >> nuit du 20 au 21 juillet 1969"
    },
    {
      id: 28,
      image: 'assets/images/mod28.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Faucon Millennium : Starwars"
    },
    {
      id: 29,
      image: 'assets/images/mod29.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Avion allemand"
    },
    {
      id: 30,
      image: 'assets/images/mod30.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Le << Petit Prince >> de Saint-Exupéry"
    },
    {
      id: 31,
      image: 'assets/images/mod31.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Hubble (télescope spatial)"
    },
    {
      id: 32,
      image: 'assets/images/mod32.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Premier pas sur la lune en Lego"
    },
    {
      id: 33,
      image: 'assets/images/mod33.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Avion en Lego"
    },
    {
      id: 34,
      image: 'assets/images/mod34.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Visseuse sans fil Lego"
    },
    {
      id: 35,
      image: 'assets/images/mod35.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Basket Lego"
    },
    {
      id: 36,
      image: 'assets/images/mod36.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: " Avion Lego"
    },
    {
      id: 37,
      image: 'assets/images/mod37.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "1969 fut aussi l'invention du lange absorbant , un peu trop réaliste 🤣😂"
    },
    {
      id: 38,
      image: 'assets/images/mod38.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "La planète Terre et la Lune en orbite autour du Soleil"
    },
    {
      id: 39,
      image: 'assets/images/mod39.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Diorama Starwars"
    },
    {
      id: 40,
      image: 'assets/images/mod40.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Diorama Starwars"
    },
    {
      id: 41,
      image: 'assets/images/mod41.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Diorama Tintin << On à marché sur la Lune >>"
    },
    {
      id: 42,
      image: 'assets/images/mod42.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Avion << Le Concorde >>"
    },
    {
      id: 43,
      image: 'assets/images/mod43.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Avion Lego avec tour de controle"
    },
    {
      id: 44,
      image: 'assets/images/mod44.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Véhicule lunaire"
    },
    {
      id: 45,
      image: 'assets/images/mod45.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Diorama ne New-york"
    },
    {
      id: 46,
      image: 'assets/images/mod46.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Fusée Artémis"
    },
    {
      id: 47,
      image: 'assets/images/mod49.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "ISS << Station spatiale internationale >>"
    },
    {
      id: 48,
      image: 'assets/images/mod48.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Station saptiale"
    },
    {
      id: 49,
      image: 'assets/images/mod50.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Diorama contenant plusieurs modeles Lego"
    },
    {
      id: 50,
      image: 'assets/images/mod51.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Diorama navette spatiale"
    },
    {
      id: 51,
      image: 'assets/images/mod52.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Diorama Starwars"
    },
    {
      id: 52,
      image: 'assets/images/mod53.jpg',
      title: 'Expo Liège-Guillemins 09/02/2025 - Vers la lune et au dela !',
      description: "Grand diorama , c'est trop bien fait !"
    },

  ];
}
