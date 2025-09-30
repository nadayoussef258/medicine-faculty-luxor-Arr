import { Component } from '@angular/core';

@Component({
  selector: 'app-education-students',
  standalone: true,
  template: `
    <h2>Education and Students Affairs Sector</h2>
    <p>Content for Education and Students Affairs Sector.</p>
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
export class EducationStudentsComponent {}
