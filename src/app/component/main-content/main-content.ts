import { Component } from '@angular/core';
import { Tabs } from '../ui/tabs/tabs';
import { CategoryContainer } from '../ui/category-container/category-container';
import { WebinarListComponent } from '../ui/webinar-list-component/webinar-list-component';
import { CommonModule } from '@angular/common';


interface LiveWebinarItem {
  isVideo: boolean;
  src: string;
  thumbnail: string;
  credits: number;
  title: string;
  authorPic: string;
  authorName: string;
  notify: boolean;
  isPlaying: boolean;
  isKeyHighlights: boolean;
  isButton: boolean;
}

interface UpcomingWebinarItem {
  credits: number;
  title: string;
  authorPic: string;
  authorName: string;
  thumbnail: string;
  notify: boolean;
  time: string;
  date: string;
  isVideo: boolean;
  isKeyHighlights: boolean;
  isButton: boolean;
}

interface ContinueWebinarItem {
  title: string;
  authorName: string;
  thumbnail: string;
  timeLeft: string;
  isButton: boolean;
}

interface CardiologyWebinarItem {
  credits: number;
  title: string;
  authorPic: string;
  authorName: string;
  thumbnail: string;
  notify: boolean;
  time: string;
  date: string;
  isVideo: boolean;
  isKeyHighlights: boolean;
  isButton: boolean;
}

interface SpeakersContent {
  isLive: boolean;
  speaker: string;
  expertIn: string;
  speakerPic: string;
}

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, Tabs, CategoryContainer, WebinarListComponent],
  templateUrl: './main-content.html',
  styleUrls: ['./main-content.css'],
})
export class MainContent {

  liveWebinarItemArray: LiveWebinarItem[] = [
    {
      isVideo: true,
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'assets/webinars/live/live-video-1.png',
      credits: 2,
      title: 'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from',
      authorPic: 'assets/authors/pdgi-logo.png',
      authorName: 'by PDGI Indonesia',
      notify: false,
      isPlaying: false,
      isKeyHighlights: true,
      isButton: true,
    },
    {
      isVideo: true,
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'assets/webinars/live/live-video-2.png',
      credits: 1.5,
      title: 'Virus is like any other respiratory virus that causes common',
      authorPic: 'assets/authors/gsk-logo.png',
      authorName: 'by GSK',
      notify: false,
      isPlaying: false,
      isKeyHighlights: true,
      isButton: true,
    },
    {
      isVideo: true,
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'assets/webinars/live/live-video-3.png',
      credits: 2,
      title: 'Virus is like any other respiratory virus that causes common',
      authorPic: 'assets/authors/bayer-logo.png',
      authorName: 'by Bayer',
      notify: false,
      isPlaying: false,
      isKeyHighlights: true,
      isButton: true,
    },
  ];

  upcomingWebinarItemArray: UpcomingWebinarItem[] = [
    {
      isVideo: false,
      thumbnail: 'assets/webinars/upcoming/upcoming-1.png',
      credits: 1.5,
      title: 'The Covid19 Management of Parox Health caretine',
      authorPic: 'assets/authors/pdgi-logo.png',
      authorName: 'by PDGI Indonesia',
      notify: true,
      time: '12:30 PM',
      date: '7 Jan 2025',
      isKeyHighlights: true,
      isButton: true,
    },
    {
      isVideo: false,
      thumbnail: 'assets/webinars/upcoming/upcoming-2.png',
      credits: 2,
      title: 'Perspectives in The Covid19 Management of Parox Health',
      authorPic: 'assets/authors/pdgi-logo.png',
      authorName: 'by PDGI Indonesia',
      notify: true,
      time: '04:30 PM',
      date: '14 Jan 2025',
      isKeyHighlights: true,
      isButton: true,
    },
    {
      isVideo: false,
      thumbnail: 'assets/webinars/upcoming/upcoming-3.png',
      credits: 1.5,
      title: 'The Covid19 Management of Parox Health caretine',
      authorPic: 'assets/authors/pdgi-logo.png',
      authorName: 'by PDGI Indonesia',
      notify: true,
      time: '6:00 PM',
      date: '21 Feb 2025',
      isKeyHighlights: true,
      isButton: true,
    },
  ];

  continueWebinarItemArray: ContinueWebinarItem[] = [
    {
      title: 'New Perspectives in The Covid19 Management',
      authorName: 'by Pfizer Indonesia',
      thumbnail: 'assets/webinars/continue/continue-thumb-1.png',
      timeLeft: '10 min left',
      isButton: false,
    },
    {
      title: 'New Perspectives in The Covid19 Management',
      authorName: 'by Pfizer Indonesia',
      thumbnail: 'assets/webinars/continue/continue-thumb-1.png',
      timeLeft: '10 min left',
      isButton: false,
    },
    {
      title: 'New Perspectives in The Covid19 Management',
      authorName: 'by Pfizer Indonesia',
      thumbnail: 'assets/webinars/continue/continue-thumb-1.png',
      timeLeft: '10 min left',
      isButton: false,
    },
    {
      title: 'New Perspectives in The Covid19 Management',
      authorName: 'by Pfizer Indonesia',
      thumbnail: 'assets/webinars/continue/continue-thumb-1.png',
      timeLeft: '10 min left',
      isButton: false,
    },
    {
      title: 'New Perspectives in The Covid19 Management',
      authorName: 'by Pfizer Indonesia',
      thumbnail: 'assets/webinars/continue/continue-thumb-1.png',
      timeLeft: '10 min left',
      isButton: false,
    },
  ]
  cardiologyWebinarItemArray : CardiologyWebinarItem[] =[
    {
      credits: 2,
      title: 'The Covid19 Management of Parox Health caretine',
      authorPic: 'assets/authors/pdgi-logo.png',
      authorName: 'by PDGI Indonesia',
      thumbnail: 'assets/webinars/continue/continue-thumb-1.png',
      notify: false,
      time: '',
      date: '',
      isVideo: true,
      isKeyHighlights: true,
      isButton: true,
    },
    {
      credits: 3,
      title: 'The Covid19 Management of Parox Health caretine',
      authorPic: 'assets/authors/pdgi-logo.png',
      authorName: 'by PDGI Indonesia',
      thumbnail: 'assets/webinars/upcoming/upcoming-2.png',
      notify: true,
      time: '6:00 PM',
      date: '21 Feb 2025',
      isVideo: true,
      isKeyHighlights: true,
      isButton: true,
    },
    {
      isVideo: true,
      thumbnail: 'assets/webinars/live/live-video-2.png',
      credits: 1.5,
      title: 'Virus is like any other respiratory virus that causes common',
      authorPic: 'assets/authors/gsk-logo.png',
      authorName: 'by GSK',
      notify: false,
      time: '',
      date: '',
      isKeyHighlights: true,
      isButton: true,
    },
  ]
  speakerContentArray : SpeakersContent[] = [
    {
      isLive: true,
      speaker: 'Dr Chong wui',
      expertIn: 'Gastrologist, General Physician',
      speakerPic: 'assets/webinars/speakers/dr-chong-wui.png',
    },
    {
      isLive: false,
      speaker: 'Dr Wuyama Guramg',
      expertIn: 'Gastroenterologist, Surgeon',
      speakerPic: 'assets/webinars/speakers/dr-chong-wui.png',
    },
    {
      isLive: false,
      speaker: 'Dr Wuyama Guramg',
      expertIn: 'Gastroenterologist, Surgeon',
      speakerPic: 'assets/webinars/speakers/dr-chong-wui.png',
    },
    {
      isLive: false,
      speaker: 'Dr Wuyama Guramg',
      expertIn: 'Gastroenterologist, Surgeon',
      speakerPic: 'assets/webinars/speakers/dr-chong-wui.png',
    },
    {
      isLive: false,
      speaker: 'Dr Wuyama Guramg',
      expertIn: 'Gastroenterologist, Surgeon',
      speakerPic: 'assets/webinars/speakers/dr-chong-wui.png',
    },
    {
      isLive: false,
      speaker: 'Dr Wuyama Guramg',
      expertIn: 'Gastroenterologist, Surgeon',
      speakerPic: 'assets/webinars/speakers/dr-chong-wui.png',
    },
  ]
  
}
