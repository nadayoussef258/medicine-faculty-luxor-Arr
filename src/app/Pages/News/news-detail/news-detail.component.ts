import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  newsData: any = null;
  mainImage: string = '';

  newsList = [
    {
      id: 1,
      title: 'Opening of the Center of Excellence in Scientific Research',
      summary: 'The Center of Excellence in Scientific Research was inaugurated at Luxor University, aiming to promote scientific research and innovation in various scientific fields.',
      content: [
        'The Center of Excellence in Scientific Research was inaugurated at Luxor University, aiming to promote scientific research and innovation in various scientific fields.',
        'It will provide advanced facilities and support for researchers and students.',
        'The center will collaborate with international institutions to enhance research quality.'
      ],
      date: new Date('2024-08-13T10:00:00'),
      category: 'Academic News',
      author: 'University Administration',
      readTime: '3 minutes',
      images: [
        'assets/slider2.jpg',
        'assets/slider3.jpg',
        'assets/slider1.jpg'
      ]
    },
    {
      id: 2,
      title: 'Signing of Cooperation Agreement with a German University',
      summary: 'Luxor University signed a cooperation agreement with the Technical University of Munich in Germany to enhance student and academic exchange between the two universities.',
      content: [
        'Luxor University signed a cooperation agreement with the Technical University of Munich in Germany to enhance student and academic exchange between the two universities.',
        'The agreement includes joint research projects and faculty exchange programs.',
        'This partnership aims to strengthen academic ties and promote innovation.'
      ],
      date: new Date('2024-08-10T10:00:00'),
      category: 'International Cooperation',
      author: 'University Administration',
      readTime: '4 minutes',
      images: [
        'assets/slider3.jpg',
        'assets/slider2.jpg'
      ]
    }
    // Add more news items as needed
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.newsData = this.newsList.find(news => news.id === id);
    if (this.newsData && this.newsData.images && this.newsData.images.length > 0) {
      this.mainImage = this.newsData.images[0];
    }
  }

  setMainImage(imageUrl: string): void {
    this.mainImage = imageUrl;
  }

  goBack(): void {
    window.history.back();
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
