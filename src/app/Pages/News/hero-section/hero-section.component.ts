import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class NewsHeroSectionComponent {
  heroData = {
    title: 'Faculty of Medicine News',
    subtitle: 'Stay updated with the latest news and developments at the Faculty of Medicine',
    backgroundImage: 'assets/slider1.png',
    searchPlaceholder: 'Search for a specific news...'
  };
}





