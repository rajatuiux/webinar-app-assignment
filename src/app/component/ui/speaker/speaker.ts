import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-speaker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speaker.html',
  styleUrl: './speaker.css'
})
export class Speaker {
  @Input() item: any;
}