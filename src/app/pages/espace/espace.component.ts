import { Component, ViewChildren, QueryList, ElementRef, OnInit, OnDestroy, NgModule } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-stargate',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, CommonModule, FormsModule],
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.scss']
})
export class EspaceComponent implements OnInit, OnDestroy {
  @ViewChildren('videoElement') videoElements!: QueryList<ElementRef<HTMLVideoElement>>;

  dhdImage = 'assets/images/dhd.png';
  irisOpen = true;
  videoPaused = true;
  vortexActive = false;
  count: number = 0;
 
  // Vidéos
  openingVideo = false;
  mainVideo = false;
  closingVideo = false;

  irisBlades = Array(20).fill(0).map((_, i) => i);
  chevronStates: boolean[] = Array(7).fill(false);

  // Synthèse vocale et audio
  audioVolume: number = 0.1; // Volume initial
  private speech: SpeechSynthesis;
  private audioElement: HTMLAudioElement | null = null;
  private timeouts: number[] = []; // Stocker les setTimeout()

  constructor() {
    this.speech = window.speechSynthesis;
  }

  ngOnInit() {
    this.initializeAudio();
    this.toggleStargate();
    console.log('Stargate component initialized and audio activated');
    
  }

  ngOnDestroy() {
    this.stopAllAudio();
    this.clearAllTimeouts();
    this.resetState();
    console.log('Stargate component destroyed, audio and animations stopped');
  }

  initializeAudio() {
    this.audioElement = new Audio();
    this.audioElement.src = 'assets/images/Portes des Étoiles.mp3';
    this.audioElement.volume = this.audioVolume;
    this.playBackgroundMusic();
  }

  stopAllAudio() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
      this.audioElement.src = ''; // Libérer la mémoire
    }
    if (this.speech) {
      this.speech.cancel();
    }
  }

  clearAllTimeouts() {
    this.timeouts.forEach(timeout => clearTimeout(timeout));
    this.timeouts = [];
  }

  resetState() {
    this.vortexActive = false;
    this.openingVideo = false;
    this.mainVideo = false;
    this.closingVideo = false;
    this.chevronStates.fill(false);
    this.count = 0;
  }

  toggleStargate() {
    console.log("DHD activated - current vortex state:", this.vortexActive);

    if (!this.vortexActive) {
      this.activateChevrons();
      this.timeouts.push(Number(setTimeout(() => {
        this.vortexActive = true;
        this.openingVideo = true;

        this.timeouts.push(Number(setTimeout(() => {
          const videoElement = this.videoElements.first?.nativeElement;
          videoElement?.play().catch(err => console.error('Error playing opening video:', err));
        }, 16300)));

        console.log("Stargate activating - wormhole opening");
      }, 19700)));
    } else {
      this.mainVideo = false;
      this.closingVideo = true;
      this.deactivateChevrons();

      this.timeouts.push(Number(setTimeout(() => {
        const closingVideoEl = this.videoElements.last?.nativeElement;
        closingVideoEl?.play().catch(err => console.error('Error playing closing video:', err));
      }, 100)));

      console.log("Stargate closing");
    }

    this.videoPaused = !this.videoPaused;
  }

  onVortexOpened() {
    console.log("Wormhole established");

    this.timeouts.push(Number(setTimeout(() => {}, 3500)));
    this.openingVideo = false;
    this.mainVideo = true;

    this.timeouts.push(Number(setTimeout(() => {
      const mainVideoEl = this.videoElements.get(1)?.nativeElement;
      mainVideoEl?.play().catch(err => console.error('Error playing main video:', err));
    }, 100)));
  }

  onVortexClosed() {
    console.log("Wormhole closed");
    this.vortexActive = false;
    this.closingVideo = false;
  }

  toggleIris() {
    this.irisOpen = !this.irisOpen;
    console.log(`Iris ${this.irisOpen ? 'opened' : 'closed'}`);

    const utterance = new SpeechSynthesisUtterance(this.irisOpen ? "Ouverture de l'iris" : "Fermeture de l'iris");
    utterance.lang = 'fr-FR';
    this.speech.speak(utterance);
  }

  getBladeRotation(index: number): string {
    const baseAngle = index * (360 / this.irisBlades.length);
    const rotation = this.irisOpen ? baseAngle : baseAngle + 100;
    return `--rotation: ${rotation}deg`;
  }

  activateChevrons() {
    this.chevronStates.fill(false);

    this.chevronStates.forEach((_, index) => {
      this.timeouts.push(Number(setTimeout(() => {
        this.chevronStates[index] = true;

        const messages = [
          "chevron 1 ; enclenché!",
          "chevron 2 ; enclenché",
          "chevron 3 ; enclenché",
          "chevron 4 ; enclenché",
          "chevron 5 ; enclenché",
          "chevron 6 ; enclenché",
          "chevron 7 ; enclenché ouverture du vortex!"
        ];

        const utterance = new SpeechSynthesisUtterance(messages[index]);
        utterance.lang = 'fr-FR';
        this.speech.speak(utterance);

        this.count++;
      }, index * 3000)));
    });

    this.count = 0;
    console.log("Chevrons activés !");
  }

  deactivateChevrons() {
    this.chevronStates.fill(false);
    console.log("Chevrons désactivés !");

    const utterance = new SpeechSynthesisUtterance("fermeture du vortex!");
    utterance.lang = 'fr-FR';
    this.speech.speak(utterance);
  }

  playBackgroundMusic() {
    if (this.audioElement) {
      this.audioElement.play().catch(error => {
        console.warn('Autoplay prevented by browser:', error);
      });
    }
  }
  downloadMusic() {
    if (this.audioElement) {
      const link = document.createElement('a');
      link.href = this.audioElement.src; // Chemin du fichier audio
      link.download = 'Portes des Étoiles.mp3'; // Nom du fichier téléchargé
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.warn("Aucun fichier audio à télécharger !");
    }
  }
  changeVolume() {
    if (this.audioElement) {
      this.audioElement.volume = this.audioVolume;
    }
  }
}


