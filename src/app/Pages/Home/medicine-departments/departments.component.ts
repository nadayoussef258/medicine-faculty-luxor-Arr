import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

export interface DepartmentItem {
  id?: string;
  title: string;
  description: string;
  iconPath: string;
  iconAlt: string;
}

@Component({
  selector: 'ck-departments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  encapsulation: ViewEncapsulation.None // This ensures CSS variables and styles are applied globally
})
export class DepartmentsComponent {
departments: DepartmentItem[] = [
    {
      id: '1',
      title: 'أمراض القلب',
      description: 'نوفر رعاية متخصصة في تشخيص وعلاج أمراض القلب والأوعية الدموية.',
      iconPath: 'images/icons_box/icon_1/icon-5.png',
      iconAlt: 'أيقونة أمراض القلب'
    },
    {
      id: '2',
      title: 'طب الأعصاب',
      description: 'رعاية شاملة لأمراض الدماغ والأعصاب باستخدام أحدث الوسائل الطبية.',
      iconPath: 'images/icons_box/icon_1/icon-4.png',
      iconAlt: 'أيقونة طب الأعصاب'
    },
    {
      id: '3',
      title: 'جراحة العظام',
      description: 'تشخيص وعلاج إصابات وكسور العظام والمفاصل بأحدث التقنيات.',
      iconPath: 'images/icons_box/icon_1/icon-3.png',
      iconAlt: 'أيقونة جراحة العظام'
    },
    {
      id: '4',
      title: 'قسم الأورام',
      description: 'رعاية متكاملة لعلاج الأورام باستخدام أحدث البروتوكولات الطبية.',
      iconPath: 'images/icons_box/icon_1/icon-2.png',
      iconAlt: 'أيقونة قسم الأورام'
    },
    {
      id: '5',
      title: 'طب العيون',
      description: 'فحوصات وعلاجات متخصصة للحفاظ على صحة وسلامة العين.',
      iconPath: 'images/icons_box/icon_1/icon-1.png',
      iconAlt: 'أيقونة طب العيون'
    },
    {
      id: '6',
      title: 'أمراض الجهاز التنفسي',
      description: 'تشخيص وعلاج أمراض الرئة والجهاز التنفسي في بيئة طبية متطورة.',
      iconPath: 'images/icons_box/icon_1/icon.png',
      iconAlt: 'أيقونة أمراض الجهاز التنفسي'
    }
  ];


  @Input() sectionTitle: string = 'أقسام الكلية';
  @Input() showTitle: boolean = true;

  constructor() { }

  onDepartmentClick(department: DepartmentItem): void {
    // Emit event or handle click as needed
    console.log('Department clicked:', department);
  }

  trackByFn(index: number, item: DepartmentItem): string {
    return item.id || item.title;
  }
}