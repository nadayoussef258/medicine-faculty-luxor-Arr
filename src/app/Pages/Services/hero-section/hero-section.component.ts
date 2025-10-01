import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class ServicesHeroSectionComponent {
  heroData = {
    title: 'Services Of Medicine Faculty',
    subtitle: 'Explore the various services provided to students, administrative staff, teaching assistants, and faculty members.',
  
  };
}




