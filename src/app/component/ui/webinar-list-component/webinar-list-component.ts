import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

type FilterKey = 'topics' | 'specialties' | 'speakers' | 'pharma';

interface Webinar {
  title: string;
  image: string;
  duration: string;
  credits: number;
  expiryDays: string;
  organizer: string;
  organizerLogo: string;
  sponsor: string;
  followers: string;
  timeAgo: string;
  keyHighlights: string[];
  likes: number;
  comments: number;
  views: number;
  topics: string[];
  specialties: string[];
  speakers: string[];
  pharma: string[];
}

@Component({
  selector: 'app-webinar-list-component',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './webinar-list-component.html',
  styleUrl: './webinar-list-component.css',
})
export class WebinarListComponent {
  topicTags = [
    { name: 'Cardiologist', count: 4 },
    { name: 'Emergency Medicine', count: 2 },
    { name: 'General Medicine', count: 9 },
    { name: 'Pediatrics', count: 5 },
    { name: 'Surgery', count: 3 },
  ];

  filters: { key: FilterKey; label: string; items: { name: string }[] }[] = [
    {
      key: 'specialties',
      label: 'Specialty',
      items: [
        { name: 'Acupuncture' },
        { name: 'Allergy and Immunology' },
        { name: 'Anaesthesiology' },
        { name: 'Clinical Nutrition' },
        { name: 'General Practitioner' },
      ],
    },
    {
      key: 'topics',
      label: 'Topics',
      items: [
        { name: 'Cardiology' },
        { name: 'Emergency Medicine' },
        { name: 'General Medicine' },
        { name: 'Pediatrics' },
        { name: 'Surgery' },
      ],
    },
    {
      key: 'speakers',
      label: 'Speakers',
      items: [
        { name: 'Dr. John Smith' },
        { name: 'Dr. Sarah Johnson' },
        { name: 'Dr. Michael Brown' },
        { name: 'Dr. Emily Davis' },
      ],
    },
    {
      key: 'pharma',
      label: 'Pharma & associations',
      items: [
        { name: 'Pfizer' },
        { name: 'Johnson & Johnson' },
        { name: 'Novartis' },
        { name: 'Roche' },
      ],
    },
  ];

  recommendedWebinars: Webinar[] = [
    {
      title: 'Perspectives in The Covid19 Management of Parox Health caretime',
      image: 'assets/webinars/upcoming/upcoming-3.png',
      duration: '24:50',
      credits: 1.5,
      expiryDays: '25h 30m',
      organizer: 'PDGI Indonesia',
      organizerLogo: 'assets/authors/pdgi-logo.png',
      sponsor: 'Roche',
      followers: '26.6k',
      timeAgo: '30 min ago',
      keyHighlights: ['Manage chronic and complex diseases'],
      likes: 20,
      comments: 12,
      views: 750,
      topics: ['General Medicine', 'Emergency Medicine'],
      specialties: ['Clinical Nutrition'],
      speakers: ['Dr. John Smith'],
      pharma: ['Roche'],
    },
    {
      title: 'New Perspectives in The Covid19 Management of Parox Health caretime',
      image: 'assets/webinars/upcoming/upcoming-1.png',
      duration: '24:50',
      credits: 2,
      expiryDays: '12 days',
      organizer: 'PDGI Indonesia',
      organizerLogo: 'assets/authors/pdgi-logo.png',
      sponsor: 'Roche',
      followers: '26.6k',
      timeAgo: '30 min ago',
      keyHighlights: ['Manage chronic and complex diseases'],
      likes: 25,
      comments: 12,
      views: 760,
      topics: ['General Medicine'],
      specialties: ['General Practitioner'],
      speakers: ['Dr. Sarah Johnson'],
      pharma: ['Roche'],
    },
    {
      title: 'Advanced Cardiology Techniques and Modern Treatment Approaches',
      image: 'assets/webinars/upcoming/upcoming-2.png',
      duration: '32:15',
      credits: 2.5,
      expiryDays: '5 days',
      organizer: 'Medical Association',
      organizerLogo: 'assets/authors/pdgi-logo.png',
      sponsor: 'Pfizer',
      followers: '18.2k',
      timeAgo: '1 hour ago',
      keyHighlights: ['Manage chronic and complex diseases'],
      likes: 35,
      comments: 18,
      views: 920,
      topics: ['Cardiology'],
      specialties: ['Anaesthesiology'],
      speakers: ['Dr. Michael Brown'],
      pharma: ['Pfizer'],
    },
  ];

  selections: Record<FilterKey, Set<string>> = {
    topics: new Set(),
    specialties: new Set(),
    speakers: new Set(),
    pharma: new Set(),
  };

  accordionOpen: Record<FilterKey, boolean> = {
    specialties: true,
    topics: false,
    speakers: false,
    pharma: false,
  };

  toggleAccordion(key: FilterKey) {
    this.accordionOpen[key] = !this.accordionOpen[key];
  }

  toggleSelection(key: FilterKey, name: string, checked?: boolean) {
    const set = this.selections[key];
    if (checked === undefined) {
      set.has(name) ? set.delete(name) : set.add(name);
    } else {
      checked ? set.add(name) : set.delete(name);
    }
  }

  isSelected(key: FilterKey, name: string) {
    return this.selections[key].has(name);
  }

  get filteredWebinars(): Webinar[] {
    return this.recommendedWebinars.filter((w) => {
      return (Object.keys(this.selections) as FilterKey[]).every((key) => {
        const selected = this.selections[key];
        return !selected.size || w[key].some((val) => selected.has(val));
      });
    });
  }
}