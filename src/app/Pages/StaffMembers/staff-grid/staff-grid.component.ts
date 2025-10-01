import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-grid',
  standalone: true,
  imports: [CommonModule], // ضروري لعمل *ngIf و*ngFor في القالب
  templateUrl: './staff-grid.component.html',
  styleUrl: './staff-grid.component.css'
})
export class StaffGridComponent {
  // رقم الصفحة الحالية
  page: number = 1;
  // عدد الكروت في كل صفحة
  pageSize: number = 6;
  // العضو المحدد لعرض تفاصيله في المودال
  selectedStaff: any = null;
  // حالة ظهور المودال
  showModal: boolean = false;

  // إرجاع أعضاء الصفحة الحالية فقط
  get pagedStaff() {
    const start = (this.page - 1) * this.pageSize;
    return this.staffData.slice(start, start + this.pageSize);
  }

  // حساب عدد الصفحات الكلي
  get totalPages() {
    return Math.ceil(this.staffData.length / this.pageSize);
  }

  // تغيير الصفحة
  setPage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
    }
  }

  // فتح نافذة التفاصيل
  openModal(staff: any): void {
    this.selectedStaff = staff;
    this.showModal = true;
  }

  // إغلاق نافذة التفاصيل
  closeModal(): void {
    this.showModal = false;
    this.selectedStaff = null;
  }

  // Staff members data (example, translated)
  staffData = [
    {
      id: 1,
      name: 'Dr. Ahmed Mohamed Ali',
      academicRank: 'Professor',
      college: 'Faculty of Medicine',
      department: 'Surgery Department',
      email: 'ahmed.mohamed@medicine.luxor.edu.eg',
      phone: '+20 123 456 7890',
      researchInterests: 'General Surgery, Laparoscopic Surgery, Oncology',
      personalPage: 'https://luxor.edu.eg/staff/ahmed-mohamed',
      cvLink: 'https://luxor.edu.eg/cv/ahmed-mohamed.pdf',
      profileImage: 'assets/event1.jpg'
    },
    {
      id: 2,
      name: 'Dr. Fatima Hassan Abdullah',
      academicRank: 'Associate Professor',
      college: 'Faculty of Medicine',
      department: 'Internal Medicine Department',
      email: 'fatima.hassan@medicine.luxor.edu.eg',
      phone: '+20 123 456 7891',
      researchInterests: 'Internal Medicine, Cardiology, Hypertension',
      personalPage: 'https://luxor.edu.eg/staff/fatima-hassan',
      cvLink: 'https://luxor.edu.eg/cv/fatima-hassan.pdf',
      profileImage: 'assets/event1.jpg'
    },
    {
      id: 3,
      name: 'Dr. Mohamed Ahmed Salem',
      academicRank: 'Lecturer',
      college: 'Faculty of Medicine',
      department: 'Pediatrics Department',
      email: 'mohamed.ahmed@medicine.luxor.edu.eg',
      phone: '+20 123 456 7892',
      researchInterests: 'Pediatrics, Neonatology, Child Development',
      personalPage: 'https://luxor.edu.eg/staff/mohamed-ahmed',
      cvLink: 'https://luxor.edu.eg/cv/mohamed-ahmed.pdf',
      profileImage: 'assets/event2.jpg'
    },
    {
      id: 4,
      name: 'Dr. Sara Mahmoud Ibrahim',
      academicRank: 'Professor',
      college: 'Faculty of Medicine',
      department: 'Gynecology and Obstetrics Department',
      email: 'sara.mahmoud@medicine.luxor.edu.eg',
      phone: '+20 123 456 7893',
      researchInterests: 'Gynecology, Obstetrics, Reproductive Health',
      personalPage: 'https://luxor.edu.eg/staff/sara-mahmoud',
      cvLink: 'https://luxor.edu.eg/cv/sara-mahmoud.pdf',
      profileImage: 'assets/event3.jpg'
    },
    {
      id: 5,
      name: 'Dr. Ali Hassan Mohamed',
      academicRank: 'Associate Professor',
      college: 'Faculty of Medicine',
      department: 'Radiology Department',
      email: 'ali.hassan@medicine.luxor.edu.eg',
      phone: '+20 123 456 7894',
      researchInterests: 'Radiology, Diagnostic Imaging, MRI Techniques',
      personalPage: 'https://luxor.edu.eg/staff/ali-hassan',
      cvLink: 'https://luxor.edu.eg/cv/ali-hassan.pdf',
      profileImage: 'assets/event2.jpg'
    },
    {
      id: 6,
      name: 'Dr. Layla Ahmed Mahmoud',
      academicRank: 'Lecturer',
      college: 'Faculty of Medicine',
      department: 'Pathology Department',
      email: 'layla.ahmed@medicine.luxor.edu.eg',
      phone: '+20 123 456 7895',
      researchInterests: 'Pathology, Histopathology, Molecular Pathology',
      personalPage: 'https://luxor.edu.eg/staff/layla-ahmed',
      cvLink: 'https://luxor.edu.eg/cv/layla-ahmed.pdf',
      profileImage: 'assets/event3.jpg'
    },
    {
      id: 7,
      name: 'Dr. Layla Ahmed Mahmoud',
      academicRank: 'Lecturer',
      college: 'Faculty of Medicine',
      department: 'Pathology Department',
      email: 'layla.ahmed@medicine.luxor.edu.eg',
      phone: '+20 123 456 7895',
      researchInterests: 'Pathology, Histopathology, Molecular Pathology',
      personalPage: 'https://luxor.edu.eg/staff/layla-ahmed',
      cvLink: 'https://luxor.edu.eg/cv/layla-ahmed.pdf',
      profileImage: 'assets/event3.jpg'
    },
    {
      id: 8,
      name: 'Dr. Layla Ahmed Mahmoud',
      academicRank: 'Lecturer',
      college: 'Faculty of Medicine',
      department: 'Pathology Department',
      email: 'layla.ahmed@medicine.luxor.edu.eg',
      phone: '+20 123 456 7895',
      researchInterests: 'Pathology, Histopathology, Molecular Pathology',
      personalPage: 'https://luxor.edu.eg/staff/layla-ahmed',
      cvLink: 'https://luxor.edu.eg/cv/layla-ahmed.pdf',
      profileImage: 'assets/event3.jpg'
    }
  ];
}
