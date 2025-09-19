import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TabItem {
  label: string;
  active?: boolean;
  className: string;
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
  tabItems: TabItem[] = [
    {
      label: 'For you',
      active: true,
      className: 'text-greysgrey-500',
    },
    {
      label: 'Live',
      active: false,
      className: 'text-primaryblack',
    },
    {
      label: 'Upcoming',
      active: false,
      className: 'text-greysgrey-500',
    },
  ];

  constructor() {
    console.log('Tabs component initialized');
  }

  selectTabItem(index: number) {
    console.log('Navigation item clicked:', this.tabItems[index].label);

    // Update active tab styles
    this.tabItems.forEach((item, i) => {
      item.active = i === index;
      item.className = i === index ? 'text-primaryblack' : 'text-greysgrey-500';
    });

    // Convert tab label -> section id
    let sectionId = this.tabItems[index].label.toLowerCase().replace(/\s+/g, '-');

    // Find section
    const sectionEl = document.getElementById(sectionId);

    if (sectionEl) {
      // Offset for sticky header (adjust value if header height changes)
      const yOffset = -80;
      const y = sectionEl.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.warn(`Section not found for id: ${sectionId}`);
    }
  }
}
