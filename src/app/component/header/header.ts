import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../../services/sidebar.service';

interface NavigationItem {
  label: string;
  icon?: string;
  active: boolean;
  className: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  searchText: string = '';
  
  screenWidth = window.innerWidth;
  
  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
  }
  
  navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      icon: 'assets/icons/home.svg',
      active: false,
      className: 'text-greysgrey-500'
    },
    {
      label: 'Webinar',
      icon: 'assets/icons/webinar.svg',
      active: true,
      className: 'text-primaryblack'
    },
    {
      label: 'Skp',
      icon: 'assets/icons/skp.svg',
      active: false,
      className: 'text-greysgrey-500'
    },
    {
      label: 'Calendar',
      icon: 'assets/icons/calender.svg',
      active: false,
      className: 'text-dark-500'
    },
    {
      label: 'Notifications',
      icon: 'assets/icons/notifications.svg',
      active: false,
      className: 'text-dark-500'
    }
  ];

  constructor(private sidebarService: SidebarService) {
    console.log('Header component initialized');
  }

  selectNavItem(index: number) {    
    console.log('Navigation item clicked:', this.navigationItems[index].label);
    
    // Reset all items to inactive
    this.navigationItems.forEach(item => item.active = false);
    
    // Set clicked item as active
    this.navigationItems[index].active = true;
        
    this.navigationItems.forEach((item, i) => {
      if (i === index) {
        item.className = 'text-primaryblack';
      } else {
        item.className = 'text-greysgrey-500';
      }
    });
  }

  createPost() {
    alert('Create post clicked! This feature will be implemented soon.');
    console.log('Post button clicked');
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
    console.log('Sidebar toggled');
  }
}
