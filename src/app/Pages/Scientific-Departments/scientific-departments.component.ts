import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-scientific-departments',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="scientific-departments-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .scientific-departments-container {
      padding: 20px;
      background-color: #f5f5f5;
    }
  `]
})
export class ScientificDepartmentsComponent {

}
