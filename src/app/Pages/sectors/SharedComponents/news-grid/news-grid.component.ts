
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





