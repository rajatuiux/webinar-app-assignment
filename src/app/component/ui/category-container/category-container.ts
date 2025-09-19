import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { Button } from '../button/button';
import { Speaker } from '../speaker/speaker';

@Component({
  selector: 'app-category-container',
  standalone: true,
  imports: [CommonModule, Card, Button, Speaker],
  templateUrl: './category-container.html',
  styleUrls: ['./category-container.css'],
})
export class CategoryContainer {
  @Input() title: string = 'Categories';
  @Input() items: any[] = [];
  @Input() speakerItems: any[] = [];

  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;
  private velocity = 0;
  private momentumId: any;

  onDragStart(event: MouseEvent, carousel: HTMLElement) {
    this.isDown = true;
    this.startX = event.pageX - carousel.offsetLeft;
    this.scrollLeft = carousel.scrollLeft;
    this.velocity = 0;
    cancelAnimationFrame(this.momentumId);
  }

  onDragEnd() {
    this.isDown = false;
    this.addMomentum();
  }

  onDragMove(event: MouseEvent, carousel: HTMLElement) {
    if (!this.isDown) return;
    event.preventDefault();

    const x = event.pageX - carousel.offsetLeft;
    const walk = x - this.startX;
    const prevScroll = carousel.scrollLeft;

    carousel.scrollLeft = this.scrollLeft - walk;

    // track velocity
    this.velocity = carousel.scrollLeft - prevScroll;
  }

  private addMomentum() {
    const step = () => {
      if (Math.abs(this.velocity) < 0.5) return; // stop when slow
      this.scrollLeft -= this.velocity;
      this.velocity *= 0.95; // friction
      this.momentumId = requestAnimationFrame(step);
    };
    this.momentumId = requestAnimationFrame(step);
  }

  onViewAll() {
    console.log('View all clicked!');
  }

  getSectionId(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-');
  }

}