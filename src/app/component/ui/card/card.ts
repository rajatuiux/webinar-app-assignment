import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './card.html',
  styleUrl: './card.css'
})

export class Card {
  @Input() item: any;

  @ViewChild('videoRef') videoElement!: ElementRef<HTMLVideoElement>;
  
  isPlaying = false;
  isWebinar = true;

  playVideo() {
  this.isPlaying = true;
  setTimeout(() => {
    this.videoElement?.nativeElement.play();
  });
  }

  screenWidth = window.innerWidth;
  
  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
  }
}