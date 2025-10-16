import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { News } from '../../../../Models/sectors';
import { ActivatedRoute } from '@angular/router';
import { SectorService } from '../../../../services/sector.service';
import { NewsGridComponent } from '../news-grid/news-grid.component';

@Component({
  selector: 'app-sector-news',
  standalone: true,
  imports: [
    CommonModule,
    AdvancedSearchComponent,
    NewsGridComponent
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class SectorNewsComponent {
 sectorId!: number;
  news: News[] = [];

  constructor(private route: ActivatedRoute, private newsService: SectorService) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.sectorId = +params['id'];
      this.loadNews();
    });
  }

  loadNews(): void {
    this.news = [
      {
        id: 1,
        title: 'Important News About the Sector',
        summary: 'This is a summary of the important news related to the sector.',
        image: 'assets/event1.jpg',
        date: '2024-06-01',
        category: 'General News',
        readTime: '5 min',
        author: 'University Administration'
      },
      {
        id: 2,
        title: 'New Update in the Sector',
        summary: 'A summary of the recent update that took place in the sector.',
        image: 'assets/event2.jpg',
        date: '2024-05-20',
        category: 'Updates',
        readTime: '3 min',
        author: 'University Administration'
      },
      {
        id: 3,
        title: 'Sector Achieves New Milestone',
        summary: 'The sector has achieved a new milestone in its ongoing projects.',
        image: 'assets/event3.jpg',
        date: '2024-04-15',
        category: 'Achievements',
        readTime: '4 min',
        author: 'Sector Media Team'
      },
      {
        id: 4,
        title: 'Upcoming Conference Announcement',
        summary: 'An upcoming conference will be held to discuss sector developments.',
        image: 'assets/slider1.jpeg',
        date: '2024-03-10',
        category: 'Events',
        readTime: '2 min',
        author: 'Conference Committee'
      },
      {
        id: 5,
        title: 'Sector Receives Recognition',
        summary: 'The sector received recognition for its outstanding performance.',
        image: 'assets/slider2.jpg',
        date: '2024-02-28',
        category: 'Awards',
        readTime: '3 min',
        author: 'University Administration'
      }
    ];
  }

  onSearch(filters: any): void {
    // هنا ممكن نفلتر الـ this.news حسب filters
    console.log('Search filters: ', filters);
  }
}





