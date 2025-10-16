
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector-news-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-grid.component.html',
  styleUrl: './news-grid.component.css'
})
export class NewsGridComponent {
  page: number = 1;
  pageSize: number = 6;

  get pagedNews() {
    const start = (this.page - 1) * this.pageSize;
    return this.newsData.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.newsData.length / this.pageSize);
  }

  setPage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
    }
  }
  newsData = [
  {
    id: 1,
    title: 'Opening of the Center of Excellence in Scientific Research',
    summary: 'The Center of Excellence in Scientific Research was inaugurated at Luxor University, aiming to promote scientific research and innovation in various scientific fields.',
    image: 'assets/slider2.jpg',
    date: '2024-08-13',
    category: 'Academic News',
    readTime: '3 minutes',
    author: 'University Administration'
  },
  {
    id: 2,
    title: 'Signing of Cooperation Agreement with a German University',
    summary: 'Luxor University signed a cooperation agreement with the Technical University of Munich in Germany to enhance student and academic exchange between the two universities.',
    image: 'assets/slider3.jpg',
    date: '2024-08-10',
    category: 'International Cooperation',
    readTime: '4 minutes',
    author: 'University Administration'
  },
  {
    id: 3,
    title: 'Launch of Master’s Program in Artificial Intelligence',
    summary: 'Luxor University announced the launch of a Master’s program in Artificial Intelligence and Machine Learning to keep pace with modern technological developments.',
    image: 'assets/slider3.jpg',
    date: '2024-08-08',
    category: 'Academic Programs',
    readTime: '5 minutes',
    author: 'University Administration'
  },
  {
    id: 4,
    title: 'University Team Wins Robotics Competition',
    summary: 'Luxor University team won first place in the regional robotics competition, reflecting excellence in engineering and technology.',
    image: 'assets/slider2.jpg',
    date: '2024-08-05',
    category: 'Student Achievements',
    readTime: '3 minutes',
    author: 'University Administration'
  },
  {
    id: 5,
    title: 'International Conference on Sustainable Development',
    summary: 'Luxor University hosted an international conference on sustainable development, with the participation of experts from various countries around the world.',
    image: 'assets/slider3.jpg',
    date: '2024-08-01',
    category: 'Conferences',
    readTime: '6 minutes',
    author: 'University Administration'
  },
  {
    id: 6,
    title: 'University Infrastructure Development',
    summary: 'The development of the university’s infrastructure has been completed, including the modernization of laboratories and the digital library.',
    image: 'assets/slider2.jpg',
    date: '2024-07-28',
    category: 'Infrastructure Development',
    readTime: '4 minutes',
    author: 'University Administration'
  },
  {
    id: 7,
    title: 'University Infrastructure Development',
    summary: 'The development of the university’s infrastructure has been completed, including the modernization of laboratories and the digital library.',
    image: 'assets/slider2.jpg',
    date: '2024-07-28',
    category: 'Infrastructure Development',
    readTime: '4 minutes',
    author: 'University Administration'
  }
];

  constructor(private router: Router) {}

  goToNewsDetail(newsId: number): void {
    this.router.navigate(['/news/detail', newsId]);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}





