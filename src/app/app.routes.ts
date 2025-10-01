import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './Pages/Home/Home/Home.component';
import { AboutCollegeComponent } from './Pages/About-College/about-college.component';
import { OverviewComponent } from './Pages/About-College/overview/overview.component';
import { ManagementComponent } from './Pages/About-College/management/management.component';
import { EducationStudentsComponent } from './Pages/sectors/education-students.component';
import { ResearchComponent } from './Pages/sectors/research.component';
import { CommunityComponent } from './Pages/sectors/community.component';
import { ScientificDepartmentsComponent } from './Pages/Scientific-Departments/scientific-departments.component';
import { AcademicDepartmentsComponent } from './Pages/Scientific-Departments/academic-departments.component';
import { ClinicalDepartmentsComponent } from './Pages/Scientific-Departments/clinical-departments.component';
import { CentersUnitsComponent } from './Pages/Centers-Units/centers-units.component';
import { CollegeJournalComponent } from './Pages/College-Journal/college-journal.component';
import { NewsComponent } from './Pages/News/news.component';
import { NewsDetailComponent } from './Pages/News/news-detail/news-detail.component';
import { StaffMembersComponent } from './Pages/StaffMembers/staff-members.component';
import { ServicesComponent } from './Pages/Services/services.component';
import { SectorPageComponent } from './Pages/sectors/Sector-Page/Sector-Page.component';
import { ParentAboutSectorComponent } from './Pages/sectors/SharedComponents/parent-about-sector/parent-about-sector.component';
import { SectorDepartmentsComponent } from './Pages/sectors/SharedComponents/sector-departments/sector-departments.component';
import { SectorNewsComponent } from './Pages/sectors/SharedComponents/News/news.component';
import { SectorNewsDetailComponent } from './Pages/sectors/SharedComponents/News/news-detail/news-detail.component';
import { SectorServicesComponent } from './Pages/sectors/SharedComponents/sector-services/sector-services.component';
import { MedicalDeanSpeechComponent } from './Pages/Home/dean-speech/dean-speech.component';
import { VisionMissionComponent } from './Pages/About-College/vision-mission.component';
import { HistoryComponent } from './Pages/About-College/overview/history.component';
import { GoalsComponent } from './Pages/goals/goals.component';
import { OrganizationalStructureComponent } from './Pages/About-College/management/OrganizationalStructure/OrganizationalStructure.component';

export const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', component: HomeComponent },
        {path:'dean-word', component:MedicalDeanSpeechComponent},
        {path:'vision-mission', component:VisionMissionComponent},
        {path:'history', component:HistoryComponent},
        {path:'objectives', component:GoalsComponent},
        {path:'structure', component:OrganizationalStructureComponent},




        {
          path: 'about-college',
          component: AboutCollegeComponent,
          children: [
            // { path: 'overview', component: OverviewComponent },
            // { path: 'management', component: ManagementComponent },
            // Add other child routes here for objectives, structure, vision-mission, etc.
          ]
        },
        {
           path: 'sector/:id',
      component: SectorPageComponent, // صفحة القطاع الرئيسية
      children: [
         { path: 'about-sector', component: ParentAboutSectorComponent },
         { path: 'sector-departments', component: SectorDepartmentsComponent },
         { path: 'sector-news', component: SectorNewsComponent },
         { path: 'sector-news/:id', component: SectorNewsDetailComponent },
         { path: 'sector-services', component: SectorServicesComponent },
         { path: '', redirectTo: 'about-sector', pathMatch: 'full' },

      ]
        },
        {
          path: 'departments',
          component: ScientificDepartmentsComponent,
          children: [
            { path: 'academic', component: AcademicDepartmentsComponent },
            { path: 'clinical', component: ClinicalDepartmentsComponent }
          ]
        },
        { path: 'centers-units', component: CentersUnitsComponent },
        { path: 'journal', component: CollegeJournalComponent },
        { path: 'staff-members', component: StaffMembersComponent },
        { path: 'services', component: ServicesComponent },
        {
          path: 'news',
          children: [
            { path: '', component: NewsComponent },
            { path: 'detail/:id', component: NewsDetailComponent }
          ]
        }
      ]
    }
];
