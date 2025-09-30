import { Component } from '@angular/core';

@Component({
  selector: 'app-college-journal',
  standalone: true,
  template: `
    <h2>College Journal</h2>
    <p>Content for College Journal.</p>
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
export class CollegeJournalComponent {}
