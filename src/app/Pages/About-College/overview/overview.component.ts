import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  template: `
    <h2>نظرة عامة على الكلية</h2>
    <ul>
      <li><a routerLink="/overview/history">تاريخ الكلية</a></li>
      <li><a routerLink="/overview/objectives">الأهداف الاستراتيجية</a></li>
      <li><a routerLink="/overview/structure">الهيكل التنظيمي</a></li>
      <li><a routerLink="/overview/vision-mission">الرؤية والرسالة</a></li>
    </ul>
  `,
  styles: [`
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
export class OverviewComponent {}
