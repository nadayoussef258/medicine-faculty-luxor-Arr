import { Component } from '@angular/core';

@Component({
  selector: 'app-research',
  standalone: true,
  template: `
    <h2>Graduate Studies and Research Sector</h2>
    <p>Content for Graduate Studies and Research Sector.</p>
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
export class ResearchComponent {}
