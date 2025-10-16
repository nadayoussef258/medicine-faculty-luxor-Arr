import { Component, OnInit } from '@angular/core';
import { ScientificDepartmentsService } from '../../services/scientific-departments.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SharedHeroSectionComponent } from '../sectors/SharedComponents/hero-section/hero-section.component';
import { TabMenuComponent } from '../sectors/SharedComponents/tab-menu/tab-menu.component';
import { Department } from '../../Models/departments';

@Component({
  selector: 'app-scientific-departments',
  standalone: true,
  imports: [SharedHeroSectionComponent, TabMenuComponent, RouterOutlet],
  templateUrl: './scientific-departments.component.html',
  styleUrls: ['./scientific-departments.component.css']
})
export class ScientificDepartmentsComponent implements OnInit {

  departmentId!: string;
  department: Department | undefined;
  departments: Department[] = [];
  tabs: any[] = [];
  currentRoute: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private scientificDepartmentsService: ScientificDepartmentsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idOrName = params.get('id') || params.get('name') || '1';
      if (/^\d+$/.test(idOrName)) {
        this.departmentId = idOrName;
        this.loadDepartmentData();
      } else {
        // map name slug to numeric id via service
        this.scientificDepartmentsService.getAllDepartments().subscribe({
          next: (list) => {
            const found = list.find(d => d.Name && d.Name.toLowerCase().includes(idOrName.toLowerCase()));
            this.departmentId = found?.Id || '1';
            this.loadDepartmentData();
          },
          error: () => {
            this.departmentId = '1';
            this.loadDepartmentData();
          }
        });
      }
    });
    this.loadAllDepartments();
  }

  loadDepartmentData() {
    this.scientificDepartmentsService.getById(this.departmentId).subscribe({
      next: (response) => {
        this.department = response;
      }
    });

    // Mock tabs data
    this.tabs = [
      { title: 'عن القسم', link: 'about-department' },
      { title: 'أخبار القسم', link: 'department-news' },
      { title: 'خدمات القسم', link: 'department-services' }
    ];
    this.currentRoute = 'about-department'; // default to about-department
  }

  loadAllDepartments() {
    this.scientificDepartmentsService.getAllDepartments().subscribe({
      next: (response) => {
        this.departments = response;
      }
    });
  }

  onTabSelected(route: string) {
    this.currentRoute = route;
    this.router.navigate([route], { relativeTo: this.route });
  }
}
