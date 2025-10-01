import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services-advanced-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './advanced-search.component.html',
  styleUrl: './advanced-search.component.css'
})
export class ServicesAdvancedSearchComponent {
  @Output() searchEvent = new EventEmitter<any>();

  searchData = {
    title: '',
    category: '',
    type: ''
  };

  categories = [
    { value: 'Students', label: 'Students' },
    { value: 'Administrative Staff', label: 'Administrative Staff' },
    { value: 'Teaching Assistants', label: 'Teaching Assistants' },
    { value: 'Faculty Members', label: 'Faculty Members' }
  ];

  types: { value: string, label: string }[] = [];

  serviceTypes = {
    'Students': [
      { value: 'Lectures', label: 'Lectures' },
      { value: 'Sections', label: 'Sections' },
      { value: 'Clinical Training', label: 'Clinical Training' },
      { value: 'Specialized Labs', label: 'Specialized Labs' },
      { value: 'Medical Simulation', label: 'Medical Simulation' },
      { value: 'Graduation Projects Support', label: 'Graduation Projects Support' },
      { value: 'Scientific Research Workshops', label: 'Scientific Research Workshops' },
      { value: 'Conference Participation', label: 'Conference Participation' },
      { value: 'Central Library', label: 'Central Library' },
      { value: 'Electronic Resources', label: 'Electronic Resources' },
      { value: 'Medical Databases', label: 'Medical Databases' },
      { value: 'Student Clinic', label: 'Student Clinic' },
      { value: 'Primary Healthcare', label: 'Primary Healthcare' },
      { value: 'Psychological Support', label: 'Psychological Support' },
      { value: 'Student Unions', label: 'Student Unions' },
      { value: 'Cultural Trips', label: 'Cultural Trips' },
      { value: 'Competitions', label: 'Competitions' },
      { value: 'Certificate Issuance', label: 'Certificate Issuance' },
      { value: 'Electronic Registration', label: 'Electronic Registration' },
      { value: 'Transfers', label: 'Transfers' }
    ],
    'Administrative Staff': [
      { value: 'Attendance Systems', label: 'Attendance Systems' },
      { value: 'HR Services', label: 'HR Services' },
      { value: 'Financial Affairs', label: 'Financial Affairs' },
      { value: 'Training Courses', label: 'Training Courses' },
      { value: 'Medical Insurance', label: 'Medical Insurance' },
      { value: 'Comprehensive Healthcare', label: 'Comprehensive Healthcare' },
      { value: 'Psychological Support', label: 'Psychological Support' }
    ],
    'Teaching Assistants': [
      { value: 'Master\'s Programs Enrollment', label: 'Master\'s Programs Enrollment' },
      { value: 'PhD Programs Enrollment', label: 'PhD Programs Enrollment' },
      { value: 'Supervision', label: 'Supervision' },
      { value: 'Research Grants', label: 'Research Grants' },
      { value: 'Scientific Journals Access', label: 'Scientific Journals Access' },
      { value: 'Publishing Workshops', label: 'Publishing Workshops' },
      { value: 'Academic Writing Workshops', label: 'Academic Writing Workshops' },
      { value: 'Training Workshops', label: 'Training Workshops' },
      { value: 'Internal Scholarships', label: 'Internal Scholarships' },
      { value: 'External Scholarships', label: 'External Scholarships' },
      { value: 'Conference Funding', label: 'Conference Funding' }
    ],
    'Faculty Members': [
      { value: 'E-learning Platforms', label: 'E-learning Platforms' },
      { value: 'Course Preparation Support', label: 'Course Preparation Support' },
      { value: 'Academic Performance Evaluation', label: 'Academic Performance Evaluation' },
      { value: 'Project Funding', label: 'Project Funding' },
      { value: 'Research Teams', label: 'Research Teams' },
      { value: 'International Cooperation', label: 'International Cooperation' },
      { value: 'Medical Convoys Participation', label: 'Medical Convoys Participation' },
      { value: 'Awareness Seminars', label: 'Awareness Seminars' },
      { value: 'Health Supervision', label: 'Health Supervision' },
      { value: 'Administrative Facilitation', label: 'Administrative Facilitation' },
      { value: 'Leave Systems', label: 'Leave Systems' },
      { value: 'Academic Promotion Support', label: 'Academic Promotion Support' }
    ]
  };

  performSearch(): void {
    this.searchEvent.emit(this.searchData);
  }

  onCategoryChange(): void {
    this.searchData.type = '';
    this.types = this.serviceTypes[this.searchData.category as keyof typeof this.serviceTypes] || [];
  }

  clearSearch(): void {
    this.searchData = {
      title: '',
      category: '',
      type: ''
    };
    this.types = [];
    this.searchEvent.emit(this.searchData);
  }
}
