import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarOpenSubject = new BehaviorSubject<boolean>(false);
  public sidebarOpen$ = this.sidebarOpenSubject.asObservable();

  toggleSidebar() {
    this.sidebarOpenSubject.next(!this.sidebarOpenSubject.value);
  }

  closeSidebar() {
    this.sidebarOpenSubject.next(false);
  }

  openSidebar() {
    this.sidebarOpenSubject.next(true);
  }

  get isOpen(): boolean {
    return this.sidebarOpenSubject.value;
  }
}
