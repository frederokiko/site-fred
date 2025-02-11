// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-video',
//   imports: [],
//   templateUrl: './video.component.html',
//   styleUrl: './video.component.scss'
// })
// export class VideoComponent {

// }

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  videos = [
    { title: "1 . Ceci est la premiere vidéo que j'ai créee avec ma fille en image par image", src: 'assets/images/video1.mp4' },
    { title: '2 . Ma fille etait petite et aimais deja le modelisme ausssi', src: 'assets/images/video2.mp4' },
    //{ title: 'Vidéo 3', src: 'assets/images/video3.mp4' }
  ];

  selectedVideo: { title: string; src: string } | null = null;

  playVideo(video: { title: string; src: string }) {
    this.selectedVideo = video;
  }

  closeVideo() {
    this.selectedVideo = null;
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    this.closeVideo();
  }
}
