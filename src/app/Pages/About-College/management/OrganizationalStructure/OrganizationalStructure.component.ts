import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Position {
  title: string;
  name: string;
  icon: string;
  color: string;
  image?: string | null;
}

interface Department {
  title: string;
  head: string;
  icon: string;
  color: string;
}
interface ExpandedNodes {
  [key: string]: boolean;
}
@Component({
  selector: 'app-OrganizationalStructure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './OrganizationalStructure.component.html',
  styleUrls: ['./OrganizationalStructure.component.css']
})


export class OrganizationalStructureComponent implements OnInit {

   expandedNodes: ExpandedNodes = {
    departments: false,
    offices: false
  };

offices: Position[] = [
  {
    title: 'مدير عام الكلية',
    name: 'Mr. Mohamed Hussein Ali',
    icon: 'fa-briefcase',
    color: '#5D4037',
    image: null
  },
  {
    title: 'مدير شؤون الطلاب',
    name: 'Mr. Ahmed Said Mahmoud',
    icon: 'fa-users',
    color: '#FF8F00',
    image: null
  },
  {
    title: 'مدير الشؤون الإدارية',
    name: 'Mr. Abdelrahman Tarek',
    icon: 'fa-file-alt',
    color: '#00796B',
    image: null
  }
];

president: Position = {
  title: 'أمين الكلية',
  name: 'Mr. Sabreen Abdelgalil',
  icon: 'fa-building',
  color: '#8B0000',
  image: 'assets/manager.png'
};

dean: Position = {
  title: 'عميد الكلية',
  name: 'Prof. Dr.Mohamed Shahat Badawy',
  icon: 'fa-graduation-cap',
  color: '#8B0000',
  image: 'assets/dean.png'
};

viceDeans: Position[] = [
  {
    title: 'وكيل الكلية لشؤون التعليم والطلاب',
    name: 'Prof. Dr. Sara Mohamed Hassan',
    icon: 'fa-book-open',
    color: '#1565C0',
  image: 'assets/slider2.jpg'
  },
  {
    title: 'وكيل الكلية للدراسات العليا والبحوث',
    name: 'Prof. Dr. Khaled Ahmed Ibrahim',
    icon: 'fa-microscope',
    color: '#388E3C',
  image: 'assets/slider2.jpg'
  },
  {
    title: 'وكيل الكلية لخدمة المجتمع والبيئة',
    name: 'Prof. Dr. Fatma Ali Mahmoud',
    icon: 'fa-heart',
    color: '#00796B',
  image: 'assets/slider2.jpg'
  }
];

departments: Department[] = [
  {
    title: 'قسم التشريح',
    head: 'Prof. Dr. Mohamed Abdallah',
    icon: 'fa-user-md',
    color: '#B71C1C',
  },
  {
    title: 'قسم الفسيولوجيا',
    head: 'Prof. Dr. Ahmed Hassan',
    icon: 'fa-user-md',
    color: '#1565C0',
  },
  {
    title: 'قسم الباثولوجيا',
    head: 'Prof. Dr. Sami Mahmoud',
    icon: 'fa-user-md',
    color: '#388E3C',
  },
  {
    title: 'قسم الباطنة',
    head: 'Prof. Dr. Yasser Abdelaziz',
    icon: 'fa-user-md',
    color: '#00796B',
  },
  {
    title: 'قسم الجراحة',
    head: 'Prof. Dr. Omar El-Sayed',
    icon: 'fa-user-md',
    color: '#FF8F00',
  },
  {
    title: 'قسم النساء والتوليد',
    head: 'Prof. Dr. Mona Ahmed',
    icon: 'fa-user-md',
    color: '#5D4037',
  },
  {
    title: 'قسم الأطفال',
    head: 'Prof. Dr. Nour El-Din Mohamed',
    icon: 'fa-user-md',
    color: '#B71C1C',
  },
  {
    title: 'قسم أمراض الصدر',
    head: 'Prof. Dr. Karim Abdallah',
    icon: 'fa-user-md',
    color: '#1565C0',
  }
];

  toggleNode(nodeId: string): void {
    this.expandedNodes[nodeId] = !this.expandedNodes[nodeId];
  }
    isExpanded(nodeId: string): boolean {
    return this.expandedNodes[nodeId] || false;
  }
  constructor() { }

  ngOnInit() {
  }

}
