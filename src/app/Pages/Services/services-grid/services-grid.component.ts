import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceItem {
  id: number;
  type: string;
  category: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-grid.component.html',
  styleUrls: ['./services-grid.component.css']
})
export class ServicesGridComponent implements OnInit, OnChanges {
  @Input() searchData: { title: string; category: string; type: string } = { title: '', category: '', type: '' };

  services: ServiceItem[] = [
    // Services Provided to Students
    { id: 1, type: 'الطلاب', category: 'الخدمات التعليمية',  title: 'المحاضرات', description: 'محاضرات شاملة تغطي جميع المواد الطبية.' },
    { id: 2, type: 'الطلاب', category: 'الخدمات التعليمية',  title: 'الأقسام', description: 'جلسات أقسام تفاعلية للفهم العميق.' },
    { id: 3, type: 'الطلاب', category: 'الخدمات التعليمية',  title: 'التدريب السريري', description: 'تدريب سريري عملي في المستشفيات.' },
 
    // Services Provided to Administrative Staff
    { id: 21, type: 'إداريين', category: 'الخدمات الإدارية',  title: 'أنظمة الحضور', description: 'أنظمة تتبع الحضور الآلية.' },
    { id: 22, type: 'إداريين', category: 'الخدمات الإدارية',  title: 'خدمات الموارد البشرية', description: 'خدمات إدارة الموارد البشرية.' },
    { id: 23, type: 'إداريين', category: 'الخدمات الإدارية',  title: 'الشؤون المالية', description: 'الإدارة والدعم المالي.' },

    // Services Provided to Teaching Assistants
    { id: 28, type: 'هيئة التدريس', category: 'الدعم الأكاديمي',  title: 'التسجيل في برامج الماجستير', description: 'دعم التسجيل في برامج الماجستير.' },
    { id: 29, type: 'هيئة التدريس', category: 'الدعم الأكاديمي',  title: 'التسجيل في برامج الدكتوراه', description: 'دعم التسجيل في برامج الدكتوراه.' },
    { id: 30, type: 'هيئة التدريس', category: 'الدعم الأكاديمي',  title: 'الإشراف', description: 'الإشراف الأكاديمي والإرشاد.' },
    { id: 31, type: 'هيئة التدريس', category: 'فرص التطوير',  title: 'منح البحث', description: 'دعم الحصول على منح البحث.' },
    { id: 32, type: 'هيئة التدريس', category: 'الموارد المعرفية',  title: 'الوصول إلى المجلات العلمية', description: 'الوصول إلى المجلات العلمية.' },

  
  ];

  
  filteredServices: ServiceItem[] = [];

  ngOnInit() {
    this.filteredServices = this.services;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchData']) {
      this.filterServices();
    }
  }

  filterServices() {
    let filtered = this.services;

    if (this.searchData.title) {
      const titleTerm = this.searchData.title.toLowerCase();
      filtered = filtered.filter(s =>
        s.title.toLowerCase().includes(titleTerm) ||
        s.description.toLowerCase().includes(titleTerm)
      );
    }

    if (this.searchData.category) {
      filtered = filtered.filter(s => s.category.toLowerCase() === this.searchData.category.toLowerCase());
    }

    if (this.searchData.type) {
      filtered = filtered.filter(s => s.type.toLowerCase() === this.searchData.type.toLowerCase());
    }

    this.filteredServices = filtered;
  }

  page: number = 1;
  pageSize: number = 9;

  get pagedNews() {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredServices.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredServices.length / this.pageSize);
  }

  setPage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
    }
  }
}

