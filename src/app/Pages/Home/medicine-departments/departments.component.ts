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
  @Input() departments: DepartmentItem[] = [
    {
      id: '1',
      title: 'CARDIOLOGY',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas adipisicing.',
      iconPath: 'images/icons_box/icon_1/icon-5.png',
      iconAlt: 'Cardiology Icon'
    },
    {
      id: '2',
      title: 'NEUROLOGY',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas adipisicing.',
      iconPath: 'images/icons_box/icon_1/icon-4.png',
      iconAlt: 'Neurology Icon'
    },
    {
      id: '3',
      title: 'ORTHOPEDICS',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas adipisicing.',
      iconPath: 'images/icons_box/icon_1/icon-3.png',
      iconAlt: 'Orthopedics Icon'
    },
    {
      id: '4',
      title: 'CANCER DEPARTMENT',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas adipisicing.',
      iconPath: 'images/icons_box/icon_1/icon-2.png',
      iconAlt: 'Cancer Department Icon'
    },
    {
      id: '5',
      title: 'OPHTHALMOLOGY',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas adipisicing.',
      iconPath: 'images/icons_box/icon_1/icon-1.png',
      iconAlt: 'Ophthalmology Icon'
    },
    {
      id: '6',
      title: 'RESPIRATORY',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas adipisicing.',
      iconPath: 'images/icons_box/icon_1/icon.png',
      iconAlt: 'Respiratory Icon'
    }
  ];

  @Input() sectionTitle: string = 'DEPARTMENTS';
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