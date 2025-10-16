import { Component } from '@angular/core';

@Component({
  selector: 'app-management',
  standalone: true,
  template: `
    <h2>Management</h2>
    <p>Content for Management.</p>
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
