import { Component } from '@angular/core';

@Component({
  selector: 'app-management',
  standalone: true,
  template: `
    <h2>الإدارة</h2>
    <p>محتوى للإدارة.</p>
  `,
  styles: [`
    h2 {
      color: #B71C1C;
    }
    p {
      color: #5D4037;
    }
  `]
})
export class ManagementComponent {}
