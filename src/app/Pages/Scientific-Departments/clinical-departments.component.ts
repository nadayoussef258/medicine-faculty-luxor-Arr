import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clinical-departments',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="clinical-departments-container">
      <h2>Clinical Departments</h2>
      <ul>
        <li><a routerLink="/departments/clinical/internal-medicine">Internal Medicine</a></li>
        <li><a routerLink="/departments/clinical/surgery">Surgery</a></li>
        <li><a routerLink="/departments/clinical/pediatrics">Pediatrics</a></li>
        <li><a routerLink="/departments/clinical/obgyn">Obstetrics and Gynecology</a></li>
        <li><a routerLink="/departments/clinical/radiology">Radiology</a></li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .clinical-departments-container {
      padding: 20px;
    }
    h2 {
      color: #B71C1C;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    li {
      margin-bottom: 8px;
    }
    a {
      text-decoration: none;
      color: #5D4037;
    }
    a:hover {
      color: #C62828;
    }
  `]
})
export class ClinicalDepartmentsComponent {}
