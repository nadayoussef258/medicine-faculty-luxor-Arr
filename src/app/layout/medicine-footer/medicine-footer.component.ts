import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface FooterContactInfo {
  logoPath: string;
  logoAlt: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export interface FooterQuickLink {
  text: string;
  url: string;
  icon?: string;
}

export interface FooterPost {
  title: string;
  url: string;
  date: string;
}

export interface FooterSocialLink {
  icon: string;
  url: string;
  title: string;
}

export interface FooterCopyright {
  text: string;
  links: Array<{
    text: string;
    url: string;
  }>;
}

@Component({
  selector: 'ck-medicine-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicine-footer.component.html',
  styleUrls: ['./medicine-footer.component.css']
})
export class MedicineFooterComponent {
  @Input() contactInfo: FooterContactInfo = {
    logoPath: 'assets/logo.png',
    logoAlt: 'MEDICARE',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fame ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.',
    address: "45 Queen's Park Rd, Brighton, UK",
    phone: '(094) 123 4567 - (094) 123 4568',
    email: 'medicareplus@domain.com'
  };

  @Input() quickLinks: FooterQuickLink[] = [
    { text: 'Home', url: '#', icon: '+' },
    { text: 'About', url: '#', icon: '+' },
    { text: 'Services', url: '#', icon: '+' },
    { text: 'Timetable', url: '#', icon: '+' },
    { text: 'Blog', url: '#', icon: '+' },
    { text: 'Contact', url: '#', icon: '+' }
  ];

  @Input() latestPosts: FooterPost[] = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetuer',
      url: '#',
      date: 'june 12, 2017'
    },
    {
      title: 'Aliquam tincidunt mauris eu risus amet',
      url: '#',
      date: 'june 12, 2017'
    },
    {
      title: 'Morbi in sem quis dui placerat ornare column',
      url: '#',
      date: 'june 12, 2017'
    }
  ];

 

  @Input() showNewsletter: boolean = false; // Newsletter section is not included

  @Output() linkClick = new EventEmitter<{type: string, item: any}>();
  @Output() socialClick = new EventEmitter<FooterSocialLink>();
  @Output() newsletterSubmit = new EventEmitter<string>();

  newsletterEmail: string = '';

  constructor() { }

  onLinkClick(type: string, item: any): void {
    this.linkClick.emit({ type, item });
  }

  onSocialClick(socialLink: FooterSocialLink): void {
    this.socialClick.emit(socialLink);
  }

  onNewsletterSubmit(): void {
    if (this.newsletterEmail.trim()) {
      this.newsletterSubmit.emit(this.newsletterEmail);
      this.newsletterEmail = '';
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  trackByFn(index: number, item: any): any {
    return item.id || item.title || item.text || index;
  }
}
