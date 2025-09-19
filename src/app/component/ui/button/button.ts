import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css']
})
export class Button {
  @Input() variant: string = 'primary'; // primary, secondary, pill-button, primary-small, etc.
  @Input() size?: 'sm' | 'md' | 'lg';   // optional size
  @Input() active: boolean = false;     // optional active state
  @Input() label: string = '';          // text displayed on the button
}
