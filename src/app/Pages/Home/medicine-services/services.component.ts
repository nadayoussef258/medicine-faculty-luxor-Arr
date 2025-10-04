// services.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface ServiceItem {
  id?: string;
  title: string;
  description: string;
  iconPath: string;
  iconAlt: string;
  readMoreUrl?: string;
}

@Component({
  selector: 'ck-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  encapsulation: ViewEncapsulation.None // هذا مهم جداً!
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      id: '1',
      title: 'جراحة زراعة القرنية',
      description: 'نوفر عمليات متقدمة لزراعة القرنية لتحسين الرؤية واستعادة النظر.',
      iconPath: 'images/icons_box/icon_4/icon-5.png',
      iconAlt: 'أيقونة جراحة زراعة القرنية',
      readMoreUrl: '#'
    },
    {
      id: '2',
      title: 'جراحة القلب والصدر',
      description: 'تشخيص وعلاج أمراض القلب والصدر باستخدام أحدث الأساليب الجراحية.',
      iconPath: 'images/icons_box/icon_4/icon-4.png',
      iconAlt: 'أيقونة جراحة القلب والصدر',
      readMoreUrl: '#'
    },
    {
      id: '3',
      title: 'الفحص الصحي الشامل',
      description: 'فحوصات طبية متكاملة للكشف المبكر عن الأمراض والحفاظ على صحتك.',
      iconPath: 'images/icons_box/icon_4/icon-3.png',
      iconAlt: 'أيقونة الفحص الصحي الشامل',
      readMoreUrl: '#'
    },
    {
      id: '4',
      title: 'تشخيص وعلاج السرطان',
      description: 'رعاية متخصصة بأحدث البروتوكولات لتشخيص وعلاج أنواع السرطان المختلفة.',
      iconPath: 'images/icons_box/icon_4/icon-2.png',
      iconAlt: 'أيقونة علاج السرطان',
      readMoreUrl: '#'
    },
    {
      id: '5',
      title: 'علاج الالتهاب الرئوي',
      description: 'تقديم أحدث العلاجات لمكافحة الالتهاب الرئوي وتحسين وظائف التنفس.',
      iconPath: 'images/icons_box/icon_4/icon-1.png',
      iconAlt: 'أيقونة علاج الالتهاب الرئوي',
      readMoreUrl: '#'
    },
    {
      id: '6',
      title: 'علاج التهاب الجلد',
      description: 'رعاية متكاملة لعلاج التهابات الجلد والحساسية وتحسين صحة البشرة.',
      iconPath: 'images/icons_box/icon_4/icon.png',
      iconAlt: 'أيقونة علاج التهاب الجلد',
      readMoreUrl: '#'
    }
  ];


  @Input() sectionTitle: string = 'خدمات الكلية';
  @Input() showTitle: boolean = true;
  @Input() showAllServicesButton: boolean = true; 
  @Input() allServicesUrl: string = '/services';
  @Input() allServicesText: string = 'كل الخدمات + ';

  @Output() serviceClick = new EventEmitter<ServiceItem>();
  @Output() readMoreClick = new EventEmitter<ServiceItem>();
  @Output() allServicesClick = new EventEmitter<void>();

  constructor() { }

  onServiceClick(service: ServiceItem): void {
    this.serviceClick.emit(service);
  }

  onReadMoreClick(service: ServiceItem, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.readMoreClick.emit(service);
  }

  onAllServicesClick(): void {
    this.allServicesClick.emit();
  }

  trackByFn(index: number, item: ServiceItem): string {
    return item.id || item.title;
  }
}