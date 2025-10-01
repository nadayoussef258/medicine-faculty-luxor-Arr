import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Statistic } from '../../../../Models/sectors';

@Component({
  selector: 'app-sector-statistics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="statistics-section">
      <h2 class="section-title">الإحصائيات</h2>
      <div class="statistics-grid">
        <div *ngFor="let stat of statistics; let i = index" 
             class="stat-card" 
             [attr.data-aos]="'fade-up'"
             [attr.data-aos-delay]="i * 100">
          <div class="stat-icon" [style.background-color]="getColor(i) + '20'">
            <span class="icon">{{ getIcon(i) }}</span>
          </div>
          <div class="stat-content">
            <div class="stat-value" [style.color]="getColor(i)">{{ stat.Count | number }}</div>
            <div class="stat-label">{{ stat.Title }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .statistics-section {
      max-width: 1200px;
      margin: 0 auto 60px;
      padding: 0 20px;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 30px;
      text-align: center;
      position: relative;
      padding-bottom: 15px;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 2px;
    }

    .statistics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
    }

    .stat-card {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      display: flex;
      align-items: center;
      gap: 20px;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.12);
    }

    .stat-icon {
      width: 70px;
      height: 70px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      flex-shrink: 0;
    }

    .stat-content {
      flex: 1;
    }

    .stat-value {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1;
      margin-bottom: 8px;
    }

    .stat-label {
      font-size: 1rem;
      color: #6b7280;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .statistics-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SectorStatisticsComponent {
  @Input() statistics!: Statistic[];

  private colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];
  private icons = ['👨‍🎓', '👨‍🏫', '📚', '🏛️', '🔬', '💼'];

  getColor(index: number): string {
    return this.colors[index % this.colors.length];
  }

  getIcon(index: number): string {
    return this.icons[index % this.icons.length];
  }
}