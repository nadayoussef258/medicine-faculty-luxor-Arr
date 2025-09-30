import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class StaffHeroSectionComponent {
  heroData = {
    title: 'Faculty Members',
    subtitle: 'Get to know the faculty members at Luxor University',
    backgroundImage: 'assets/staff.jpg',
    searchPlaceholder: 'Search for a faculty member...'
  };
}
