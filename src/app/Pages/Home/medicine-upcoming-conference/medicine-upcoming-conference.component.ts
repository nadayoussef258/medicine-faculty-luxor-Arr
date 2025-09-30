import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Conference {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-medicine-upcoming-conference',
  standalone: true,
  imports: [CommonModule, RouterModule],
   templateUrl: './medicine-upcoming-conference.component.html',
  styleUrls: ['./medicine-upcoming-conference.component.css']
})
export class MedicineUpcomingConferenceComponent {
  conference: Conference = {
    id: '15',
    title: '15th International Medical Conference',
    subtitle: 'Innovation in Medicine and Health',
    date: 'December 15-17, 2024',
    location: 'Main Conference Hall - Faculty of Medicine',
    description: 'Join us at the 15th International Medical Conference where leading experts and specialists gather to discuss the latest advancements and innovations in healthcare and medical research.',
    image: 'assets/event1.jpg',
  };
}
