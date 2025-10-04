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
    title: 'أخبار هامة عن القطاع',
    summary: 'هذا ملخص للأخبار الهامة المتعلقة بالقطاع.',
    image: 'assets/event1.jpg',
    date: '2024-06-01',
    category: 'أخبار عامة',
    readTime: '٥ دقائق',
    author: 'إدارة الجامعة'
  },
  {
    id: 2,
    title: 'تحديث جديد في القطاع',
    summary: 'ملخص للتحديث الأخير الذي جرى في القطاع.',
    image: 'assets/event2.jpg',
    date: '2024-05-20',
    category: 'تحديثات',
    readTime: '٣ دقائق',
    author: 'إدارة الجامعة'
  },
  {
    id: 3,
    title: 'القطاع يحقق إنجازاً جديداً',
    summary: 'حقق القطاع إنجازاً جديداً في مشاريعه المستمرة.',
    image: 'assets/event3.jpg',
    date: '2024-04-15',
    category: 'إنجازات',
    readTime: '٤ دقائق',
    author: 'فريق إعلام القطاع'
  },
  {
    id: 4,
    title: 'إعلان عن مؤتمر قادم',
    summary: 'سيُعقد مؤتمر قريباً لمناقشة تطورات القطاع.',
    image: 'assets/slider1.jpeg',
    date: '2024-03-10',
    category: 'فعاليات',
    readTime: 'دقيقتان',
    author: 'لجنة المؤتمر'
  },
  {
    id: 5,
    title: 'القطاع يتلقى تكريماً',
    summary: 'حصل القطاع على تكريم لأدائه المتميز.',
    image: 'assets/slider2.jpg',
    date: '2024-02-28',
    category: 'جوائز',
    readTime: '٣ دقائق',
    author: 'إدارة الجامعة'
  }
];

  }

  onSearch(filters: any): void {
    // هنا ممكن نفلتر الـ this.news حسب filters
    console.log('Search filters: ', filters);
  }
}





