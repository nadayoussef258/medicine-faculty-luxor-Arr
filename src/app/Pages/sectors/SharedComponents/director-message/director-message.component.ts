import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorDirector } from '../../../../Models/sectors';

@Component({
  selector: 'app-director-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="director-section" *ngIf="director">
      <h2 class="section-title">كلمة المدير</h2>
      <div class="director-card">
        <div class="director-image-wrapper" data-aos="fade-right">
          <img [src]="director.ImageUrl" [alt]="director.Name" class="director-image">
          <div class="director-badge">
            <span class="badge-icon">👔</span>
          </div>
        </div>
        <div class="director-content" data-aos="fade-left">
          <div class="director-info">
            <h3 class="director-name">{{ director.Name }}</h3>
            <p class="director-title">{{ director.Title }}</p>
          </div>
          <div class="director-message">
            <div class="quote-icon">"</div>
            <p class="message-text">{{ director.Message }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .director-section {
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

    .director-card {
      background: white;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 40px;
      align-items: center;
    }

    .director-image-wrapper {
      position: relative;
    }

    .director-image {
      width: 100%;
      height: 350px;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }

    .director-badge {
      position: absolute;
      bottom: -15px;
      right: -15px;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(102,126,234,0.4);
    }

    .badge-icon {
      font-size: 1.8rem;
    }

    .director-content {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .director-info {
      border-right: 4px solid #667eea;
      padding-right: 20px;
    }

    .director-name {
      font-size: 1.8rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 8px;
    }

    .director-title {
      font-size: 1.1rem;
      color: #667eea;
      font-weight: 600;
    }

    .director-message {
      position: relative;
      padding: 25px;
      background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
      border-radius: 15px;
    }

    .quote-icon {
      position: absolute;
      top: -10px;
      right: 20px;
      font-size: 4rem;
      color: #667eea;
      opacity: 0.3;
      font-family: Georgia, serif;
    }

    .message-text {
      font-size: 1.1rem;
      line-height: 1.9;
      color: #374151;
      position: relative;
      z-index: 1;
    }

    @media (max-width: 768px) {
      .director-card {
        grid-template-columns: 1fr;
        padding: 30px 20px;
      }

      .director-image {
        height: 300px;
      }

      .director-info {
        border-right: none;
        border-top: 4px solid #667eea;
        padding-right: 0;
        padding-top: 15px;
      }
    }
  `]
})
export class DirectorMessageComponent {
  @Input() director?: SectorDirector;
}