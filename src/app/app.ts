import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { MainContent } from './component/main-content/main-content';

@Component({
  selector: 'app-root',
  imports: [Header, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
