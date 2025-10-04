import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SectorService } from '../../../../services/sector.service';

import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SectorServices } from '../../../../Models/sectors';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-sector-services',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DialogModule,
    ProgressSpinnerModule
  ],
  templateUrl: './sector-services.component.html',
  styleUrls: ['./sector-services.component.css']
})
export class SectorServicesComponent implements OnInit {

  @Input() sectorId!: string;
  services: SectorServices[] = [];
  loading: boolean = false;
  selectedService: SectorServices | null = null;
  displayDetails: boolean = false;
  selectedCategory: string = 'all';
  categories: string[] = [];

  constructor(private servicesService: SectorService,private route:ActivatedRoute) {}

   ngOnInit() {
    this.route.parent?.params.subscribe(params => {
      this.sectorId = params['id'];   // هنا هتجيب الـ sectorId
      this.loadServices();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sectorId'] && !changes['sectorId'].firstChange) {
      this.loadServices();
    }
  }

  loadServices() {
    this.services = [
      {
        id: '1',
        name: 'خدمة التسجيل',
        details: 'خدمة تسجيل الطلاب للبرامج التعليمية.',
        duration: 'شهر واحد',
        applicationUrl: 'https://example.com/apply',
        downloadUrl: 'https://example.com/download',
        isOnline: true,
        category: 'تعليمي',
        fees: 100,
        contactPerson: 'أحمد محمد',
        contactPhone: '0123456789',
        sectorId: this.sectorId
      },
      {
        id: '2',
        name: 'خدمة الاستشارة',
        details: 'خدمة استشارية للطلاب والموظفين.',
        duration: 'أسبوع واحد',
        applicationUrl: 'https://example.com/consult',
        downloadUrl: 'https://example.com/consult-form',
        isOnline: false,
        category: 'استشاري',
        fees: 50,
        contactPerson: 'فاطمة علي',
        contactPhone: '0987654321',
        sectorId: this.sectorId
      }
    ];
    this.extractCategories();
  }

  extractCategories() {
  const uniqueCategories = [
    ...new Set(this.services.map(service => service.category || 'Unclassified'))
  ];
  this.categories = ['all', ...uniqueCategories];
}


  showDetails(service: SectorServices) {
    this.selectedService = service;
    this.displayDetails = true;
  }

  hideDetails() {
    this.displayDetails = false;
    this.selectedService = null;
  }


  openApplicationLink(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  downloadForm(url?: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

}
