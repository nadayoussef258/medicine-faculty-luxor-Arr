import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent {
  goalsData = {
  subtitle: 'أهدافنا',
  title: 'أهداف كلية الطب - جامعة الأقصر',
  description: 'نسعى لتحقيق مجموعة من الأهداف الاستراتيجية لضمان التميز في التعليم الطبي وخدمات الرعاية الصحية والبحث العلمي.',
  goals: [
    {
      icon: 'pi pi-graduation-cap',
      title: 'إعداد الخريجين المؤهلين',
      description: 'تعليم وتدريب الخريجين الذين يتمتعون بالكفاءة العلمية والمهنية، قادرين على المنافسة في أسواق الرعاية الصحية المحلية والإقليمية والعالمية، مع مهارات نظرية وعملية قوية.'
    },
    {
      icon: 'pi pi-search',
      title: 'تعزيز البحث العلمي',
      description: 'تقدم البحث الطبي والابتكار من خلال دعم المشاريع البحثية المتميزة، وتعزيز الاكتشافات الطبية، وتعزيز التعاون البحثي الدولي.'
    },
    {
      icon: 'pi pi-globe',
      title: 'المجتمع والتنمية المستدامة',
      description: 'المساهمة في الرعاية الصحية المستدامة وتنمية المجتمع من خلال مواجهة تحديات الصحة العامة، وتقديم الحلول الطبية، وتعزيز الشراكات مع قطاع الرعاية الصحية.'
    },
    {
      icon: 'pi pi-star',
      title: 'التميز الأكاديمي والسريري',
      description: 'تحقيق التميز في البرامج الأكاديمية والسريرية من خلال تطوير المناهج المستمر، واعتماد طرق التدريس الحديثة، وضمان التعليم الطبي عالي الجودة.'
    }
  ]
};

}
