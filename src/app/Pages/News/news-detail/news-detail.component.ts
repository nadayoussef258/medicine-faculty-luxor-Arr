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
      title: 'افتتاح مركز التميز في البحث العلمي',
      summary: 'تم افتتاح مركز التميز في البحث العلمي بجامعة الأقصر، بهدف تعزيز البحث العلمي والابتكار في مختلف المجالات العلمية.',
      content: [
        'تم افتتاح مركز التميز في البحث العلمي بجامعة الأقصر، بهدف تعزيز البحث العلمي والابتكار في مختلف المجالات العلمية.',
        'سيوفر المركز مرافق متقدمة ودعمًا للباحثين والطلاب.',
        'كما سيتعاون مع مؤسسات دولية لتعزيز جودة الأبحاث.'
      ],
      date: new Date('2024-08-13T10:00:00'),
      category: 'أخبار أكاديمية',
      author: 'إدارة الجامعة',
      readTime: '3 دقائق',
      images: [
        'assets/slider2.jpg',
        'assets/slider3.jpg',
        'assets/slider1.jpg'
      ]
    },
    {
      id: 2,
      title: 'توقيع اتفاقية تعاون مع جامعة ألمانية',
      summary: 'وقّعت جامعة الأقصر اتفاقية تعاون مع الجامعة التقنية في ميونخ بألمانيا لتعزيز التبادل الطلابي والأكاديمي بين الجامعتين.',
      content: [
        'وقّعت جامعة الأقصر اتفاقية تعاون مع الجامعة التقنية في ميونخ بألمانيا لتعزيز التبادل الطلابي والأكاديمي بين الجامعتين.',
        'تشمل الاتفاقية مشروعات بحثية مشتركة وبرامج تبادل بين أعضاء هيئة التدريس.',
        'يهدف هذا التعاون إلى تعزيز الروابط الأكاديمية ودعم الابتكار.'
      ],
      date: new Date('2024-08-10T10:00:00'),
      category: 'التعاون الدولي',
      author: 'إدارة الجامعة',
      readTime: '4 دقائق',
      images: [
        'assets/slider3.jpg',
        'assets/slider2.jpg'
      ]
    }
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
