import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css']
})
export class Button {
  @Input() variant: string = 'primary'; // primary, secondary, pill-button, primary-small, etc.
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() active: boolean = false;
  @Input() label: string = '';

  screenWidth = window.innerWidth;
  
  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
  }
}
