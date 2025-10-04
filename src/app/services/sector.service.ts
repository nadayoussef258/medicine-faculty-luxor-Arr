import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AboutSector, AddSectorAttachmentDto, AddSectorDetailDto, AddSectorDto, AddSectorStatDto, Department, EditSectorAttachmentDto, EditSectorDetailDto, EditSectorStatDto, NavTab, News, Sector, SectorBasicInfo, SectorDirector, SectorDto, SectorGoal, SectorImage, SectorMission, SectorServices, SectorVision, Statistic } from '../Models/sectors';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SectorService {
private apiUrl = 'api/sectors'; // Replace with actual API

  constructor(private http: HttpClient) {}
  // MOCK DATA ONLY - remove all HttpClient and API_ENDPOINTS usage

  // Sectors
  AddSector(dto: AddSectorDto): Observable<string> {
    return of('Added (Mock)').pipe(delay(500));
  }

  geAlltSectors(): Observable<SectorDto[]> {
    return of([]).pipe(delay(500));
  }

  UpdateSector(dto: AddSectorDto): Observable<string> {
    return of('Updated (Mock)').pipe(delay(500));
  }

  deleteSector(id: string): Observable<string> {
    return of('Deleted (Mock)').pipe(delay(500));
  }

  
  getById(id: string): Observable<AddSectorDto | undefined> {
    // بيانات تجريبية للقطاعات
    const mockSectors: { [key: string]: AddSectorDto } = {
      '1': {
        name: 'قطاع التعليم والطلاب',
        subTitle: 'مسؤول عن إدارة شئون الطلاب والعملية التعليمية بالجامعة.'
      },
      '2': {
        name: 'قطاع الدراسات العليا والبحوث',
        subTitle: 'يشرف على برامج الماجستير والدكتوراه والمشاريع البحثية.'
      },
      '3': {
        name: 'قطاع خدمة المجتمع وتنمية البيئة',
        subTitle: 'يساهم في خدمة المجتمع المحلي والتنمية المستدامة.'
      },
      '4': {
        name: 'قطاع أمين عام الجامعة',
        subTitle: 'مسؤول عن الشئون الإدارية والمالية بالجامعة.'
      }
    };
    return of(mockSectors[id]).pipe(delay(300));
  }
  // Sector Services
 

  AddSectorService(dto: SectorServices): Observable<string> {
    return of('تمت إضافة الخدمة (Mock)').pipe(delay(500));
  }

  UpdateSectorService(dto: SectorServices): Observable<string> {
    return of('تم تحديث الخدمة (Mock)').pipe(delay(500));
  }

  DeleteSectorService(id: string): Observable<string> {
    return of('تم حذف الخدمة (Mock)').pipe(delay(500));
  }
//   getSectorDetails(sectorId: number): Observable<AboutSector> {
//     return this.http.get<SectorDetailsDto>(`${this.apiUrl}/${sectorId}/details`)
//       .pipe(map(toAppAboutSector));
//   }

//   getSectorImage(sectorId: number): Observable<SectorImage> {
//     return this.http.get<SectorAttachmentDto>(`${this.apiUrl}/${sectorId}/image`)
//       .pipe(map((toAppSectorImage)));
//   }

//  getSectorStats(sectorId: number): Observable<Statistic[]> {
//   return this.http.get<SectorStatsDto[]>(`${this.apiUrl}/${sectorId}/stats`)
//     .pipe(
//       map((dtos: SectorStatsDto[]) => dtos.map(toAppSectorStats)) 
//     ); 
// }





  getSectorImage(sectorId: number): Observable<SectorImage> {
  const mockImages: { [key: number]: SectorImage } = {
    1: { Id: 1, Field: "main", UrlPath: "assets/student.jpeg", SectorId:' 1' },
    2: { Id: 2, Field: "main", UrlPath: "assets/staff.jpg", SectorId: '2' },
    3: { Id: 3, Field: "main", UrlPath: "assets/LAND.png", SectorId: '3' },
    4: { Id: 4, Field: "main", UrlPath: "assets/building.jpg", SectorId: '4' },
  };
  return of(mockImages[sectorId]);
}

 
 
  // إحصائيات القطاعات
  getSectorStats(sectorId: string): Observable<Statistic[]> {
    const mockStats: { [key: string]: Statistic[] } = {
      1: [
        { Id: 1, Title: "عدد الأقسام", Count: 12 },
        { Id: 2, Title: "عدد الطلاب", Count: 15000 },
        { Id: 3, Title: "عدد الموظفين", Count: 90 }
      ],
      2: [
        { Id: 1, Title: "برامج الماجستير", Count: 25 },
        { Id: 2, Title: "برامج الدكتوراه", Count: 10 },
        { Id: 3, Title: "عدد الموظفين", Count: 90 }
      ],
      3: [
        { Id: 1, Title: "مشروعات مجتمعية", Count: 40 },
        { Id: 2, Title: "شراكات", Count: 15 },
        { Id: 3, Title: "عدد الموظفين", Count: 90 }
      ],
      4: [
        { Id: 1, Title: "عدد العاملين", Count: 500 },
        { Id: 2, Title: "عدد الإدارات", Count: 20 },
        { Id: 3, Title: "عدد الموظفين", Count: 90 }
      ]
    };
    return of(mockStats[sectorId]);
  }

  // خدمات القطاع (قائمة)
  getAllSectorServices(): Observable<SectorServices[]> {
    const mockServices: SectorServices[] = [
      {
        id: '1',
        name: 'استخراج شهادة قيد',
        details: 'خدمة لاستخراج شهادات القيد للطلاب الحاليين.',
        duration: 'يومان',
        isOnline: true,
        category: 'شهادات',
        fees: 20,
        sectorId: '1',
        applicationUrl: '',
        downloadUrl: '',
        contactPerson: 'موظف شئون الطلاب',
        contactPhone: '01000000000'
      },
      {
        id: '2',
        name: 'تقديم التظلمات',
        details: 'خدمة تقديم التظلمات على النتائج.',
        duration: '3 أيام',
        isOnline: false,
        category: 'تظلمات',
        sectorId: '1',
        contactPerson: 'موظف شئون الطلاب',
        contactPhone: '01000000001'
      }
    ];
    return of(mockServices).pipe(delay(300));
  }



getSectorNews(sectorId: string): Observable<News[]> {
    const mockNews: News[] = [
      { id: 1, title: 'بدء التقديم للعام الجديد', summary: 'تم فتح باب التقديم للعام الجامعي الجديد.', image: 'assets/slider2.jpg', date: '2024-08-13', category: 'أكاديمي', readTime: '3 دقائق', author: 'إدارة الجامعة' },
      { id: 2, title: 'نتائج الامتحانات', summary: 'إعلان نتائج امتحانات الفصل الدراسي الثاني.', image: 'assets/slider3.jpg', date: '2024-08-10', category: 'إعلانات', readTime: 'دقيقتان', author: 'إدارة الجامعة' }
    ];
    return of(sectorId === '1' ? mockNews : []).pipe(delay(200));
  }


  // CRUD methods for Hero Section
  updateSectorBasicInfo(sectorId: string, info: SectorBasicInfo): Observable<SectorBasicInfo> {
    // Mock update
    return of(info).pipe(delay(500));
  }

  // CRUD methods for Attachments
  getSectorAttachments(sectorId: string): Observable<SectorImage[]> {
    const mockAttachments: { [key: string]: SectorImage[] } = {
      1: [
        { Id: 1, Field: "main", UrlPath: "assets/student.jpeg", SectorId: '1' },
        { Id: 2, Field: "gallery", UrlPath: "assets/building.jpg", SectorId: '1' }
      ],
      2: [
        { Id: 3, Field: "main", UrlPath: "assets/staff.jpg", SectorId: '2' }
      ],
      3: [
        { Id: 4, Field: "main", UrlPath: "assets/LAND.png", SectorId: '3' }
      ],
      4: [
        { Id: 5, Field: "main", UrlPath: "assets/building.jpg", SectorId: '4' }
      ]
    };
    return of(mockAttachments[sectorId] || []);
  }

  addSectorAttachment(dto: AddSectorAttachmentDto): Observable<SectorImage> {
    // Mock add
    const newAttachment: SectorImage = {
      Id: Math.floor(Math.random() * 1000),
      UrlPath: 'assets/' + dto.FilePath.name, // Mock path
      SectorId: dto.SectorId
    };
    return of(newAttachment).pipe(delay(500));
  }

  editSectorAttachment(dto: EditSectorAttachmentDto): Observable<SectorImage> {
    // Mock edit
    const updated: SectorImage = {
      Id: dto.Id,
      UrlPath: dto.FilePath ? 'assets/' + dto.FilePath.name : 'assets/default.jpg',
      SectorId: dto.SectorId
    };
    return of(updated).pipe(delay(500));
  }

  deleteSectorAttachment(id: number): Observable<void> {
    // Mock delete
    return of(void 0).pipe(delay(500));
  }

  // CRUD methods for Details
  addSectorDetail(dto: AddSectorDetailDto): Observable<AboutSector> {
    // Mock add
    const newDetail: AboutSector = {
      Id: Math.floor(Math.random() * 1000),
      Title: dto.Title,
      About: dto.About,
      SectorId: dto.SectorId
    };
    return of(newDetail).pipe(delay(500));
  }

  editSectorDetail(dto: EditSectorDetailDto): Observable<AboutSector> {
    // Mock edit
    const updated: AboutSector = {
      Id: dto.Id,
      Title: dto.Title,
      About: dto.About,
      SectorId: dto.SectorId
    };
    return of(updated).pipe(delay(500));
  }

  deleteSectorDetail(id: number): Observable<void> {
    // Mock delete
    return of(void 0).pipe(delay(500));
  }

  // CRUD methods for Stats
  addSectorStat(dto: AddSectorStatDto): Observable<Statistic> {
    // Mock add
    const newStat: Statistic = {
      Id: Math.floor(Math.random() * 1000),
      Title: dto.Title,
      Count: dto.Count,
      SectorId: dto.SectorId
    };
    return of(newStat).pipe(delay(500));
  }

  editSectorStat(dto: EditSectorStatDto): Observable<Statistic> {
    // Mock edit
    const updated: Statistic = {
      Id: dto.Id,
      Title: dto.Title,
      Count: dto.Count,
      SectorId: dto.SectorId
    };
    return of(updated).pipe(delay(500));
  }

  deleteSectorStat(id: number): Observable<void> {
    // Mock delete
    return of(void 0).pipe(delay(500));
  }

  // Add new sector
  // private sectors: AddSectorDto[] = [
  //   { Name: 'شئون التعليم والطلاب', SubTitle: 'وصف مختصر 1' },
  //   { Name: 'الدراسات العليا والبحوث', SubTitle: 'وصف مختصر 2' },
  //   { Name: 'خدمة المجتمع وتنمية البيئة', SubTitle: 'وصف مختصر 3' },
  //   { Name: 'أمين عام الجامعة', SubTitle: 'وصف مختصر 4' }
  // ];

  // addSector(dto: AddSectorDto): Observable<any> {
  //   // Add the new sector to the local array (mock)
  //   this.sectors.push(dto);
  //   return of({ success: true, sector: dto }).pipe(delay(500));
  // }

  // getSectors(): Observable<AddSectorDto[]> {
  //   return of(this.sectors).pipe(delay(500));
  // }


  getSectorById(sectorId: string): Observable<Sector> {
    // return this.http.get<Sector>(`${this.apiUrl}/${sectorId}`);
    
    // Mock data للتجربة
    return of(this.getMockSector(sectorId));
  }

  getAboutSector(sectorId: string): Observable<AboutSector> {
    return this.http.get<AboutSector>(`${this.apiUrl}/${sectorId}/about`);
  }

  getSectorImages(sectorId: string): Observable<SectorImage[]> {
    return this.http.get<SectorImage[]>(`${this.apiUrl}/${sectorId}/images`);
  }

  getStatistics(sectorId: string): Observable<Statistic[]> {
    return this.http.get<Statistic[]>(`${this.apiUrl}/${sectorId}/statistics`);
  }

  getDirector(sectorId: string): Observable<SectorDirector> {
    return this.http.get<SectorDirector>(`${this.apiUrl}/${sectorId}/director`);
  }

  getVision(sectorId: string): Observable<SectorVision> {
    return this.http.get<SectorVision>(`${this.apiUrl}/${sectorId}/vision`);
  }

  getMission(sectorId: string): Observable<SectorMission> {
    return this.http.get<SectorMission>(`${this.apiUrl}/${sectorId}/mission`);
  }

  getGoals(sectorId: string): Observable<SectorGoal[]> {
    return this.http.get<SectorGoal[]>(`${this.apiUrl}/${sectorId}/goals`);
  }
  private getMockSector(id: string): Sector {
    switch (id) {
      case '1':
        return {
          Id: '1',
          Name: 'قطاع التعليم وشئون الطلاب',
          AboutSector: {
            Id: 1,
            Title: 'عن القطاع',
            About: 'يُعد قطاع التعليم وشئون الطلاب من أهم القطاعات في كلية الطب، حيث يركز على تطوير العملية التعليمية وتحسين مستوى الخدمات المقدمة للطلاب. يعمل القطاع على تحقيق التميز الأكاديمي من خلال برامج تعليمية متقدمة تواكب أحدث المعايير العالمية في التعليم الطبي.',
            SectorId: '1'
          },
          SectorImages: [
            {
              Id: 1,
              Field: 'MainImage',
              UrlPath: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
              SectorId: '1'
            }
          ],
          Statistics: [
            { Id: 1, Title: 'عدد الطلاب', Count: 2500, SectorId: '1' },
            { Id: 2, Title: 'أعضاء هيئة التدريس', Count: 180, SectorId: '1' },
            { Id: 3, Title: 'البرامج الأكاديمية', Count: 12, SectorId: '1' },
          ],
          Director: {
            Id: 1,
            Name: 'الأستاذ/ عادل عامر محمد',
            Title: 'مدير قطاع التعليم وشئون الطلاب',
            Message: 'يسعدني أن أرحب بكم في قطاع التعليم وشئون الطلاب بكلية الطب. نحن نعمل جاهدين على توفير بيئة تعليمية متميزة تساعد طلابنا على تحقيق أهدافهم الأكاديمية والمهنية. نحن نؤمن بأهمية التطوير المستمر والابتكار في العملية التعليمية لإعداد أطباء متميزين قادرين على خدمة المجتمع.',
            ImageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
            SectorId: '1'
          },
          Vision: {
            Id: 1,
            Vision: 'أن يكون القطاع رائدًا في التعليم الطبي على المستويين الإقليمي والدولي، والمساهمة في تخريج أطباء متميزين قادرين على خدمة المجتمع وتطوير النظام الصحي.',
            SectorId: '1'
          },
          Mission: {
            Id: 1,
            Mission: 'تقديم تعليم طبي عالي الجودة قائم على أحدث المعايير العالمية، وتوفير بيئة داعمة للطلاب، وتنمية قدراتهم العلمية والعملية والإنسانية لإعداد كوادر طبية متميزة.',
            SectorId: '1'
          },
          Goals: [
            { Id: 1, Goal: 'تطوير البرامج الأكاديمية بما يتوافق مع المعايير الدولية للتعليم الطبي', OrderIndex: 1, SectorId: '1' },
            { Id: 2, Goal: 'تحسين جودة التدريس والتدريب الإكلينيكي باستخدام أحدث الطرق التعليمية', OrderIndex: 2, SectorId: '1' },
            { Id: 3, Goal: 'دعم الطلاب أكاديميًا ونفسيًا واجتماعيًا لضمان تفوقهم العلمي', OrderIndex: 3, SectorId: '1' },
            { Id: 4, Goal: 'تعزيز البحث العلمي والابتكار في مختلف المجالات الطبية', OrderIndex: 4, SectorId: '1' },
            { Id: 5, Goal: 'بناء شراكات محلية ودولية مع مؤسسات تعليمية وصحية مرموقة', OrderIndex: 5, SectorId: '1' }
          ]
        };
      case '2':
        return {
          Id: '2',
          Name: 'قطاع الدراسات العليا والبحوث',
          AboutSector: {
            Id: 2,
            Title: 'عن القطاع',
            About: 'يشرف قطاع الدراسات العليا والبحوث على برامج الماجستير والدكتوراه والمشروعات البحثية في كلية الطب. ويعمل على تعزيز البحث العلمي وتوفير فرص تدريب متقدمة لطلاب الدراسات العليا للإسهام في تطوير المعرفة والابتكار الطبي.',
            SectorId: '2'
          },
          SectorImages: [
            {
              Id: 2,
              Field: 'MainImage',
              UrlPath: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
              SectorId: '2'
            }
          ],
          Statistics: [
            { Id: 5, Title: 'برامج الماجستير', Count: 25, SectorId: '2' },
            { Id: 6, Title: 'برامج الدكتوراه', Count: 10, SectorId: '2' },
            { Id: 7, Title: 'المشروعات البحثية', Count: 150, SectorId: '2' },
            { Id: 8, Title: 'الأبحاث المنشورة', Count: 300, SectorId: '2' }
          ],
          Director: {
            Id: 2,
            Name: 'د. فاطمة حسن الزهراء',
            Title: 'مدير قطاع الدراسات العليا والبحوث',
            Message: 'مرحبًا بكم في قطاع الدراسات العليا والبحوث. نحن ملتزمون بدعم ثقافة التميز البحثي وتزويد طلاب الدراسات العليا بالأدوات والموارد اللازمة لتطوير العلوم الطبية وتحسين نتائج الرعاية الصحية.',
            ImageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
            SectorId: '2'
          },
          Vision: {
            Id: 2,
            Vision: 'أن يكون مركزًا للتميز في التعليم الطبي للدراسات العليا والبحث العلمي، وإعداد باحثين مبتكرين وقادة في الرعاية الصحية.',
            SectorId: '2'
          },
          Mission: {
            Id: 2,
            Mission: 'تقديم تعليم متكامل للدراسات العليا، ودعم الأبحاث الرائدة، والمساهمة في نشر المعرفة لتطوير الممارسة الطبية والصحة العامة.',
            SectorId: '2'
          },
          Goals: [
            { Id: 6, Goal: 'توسيع برامج الدراسات العليا لتلبية الاحتياجات المتزايدة', OrderIndex: 1, SectorId: '2' },
            { Id: 7, Goal: 'زيادة تمويل الأبحاث والتعاون البحثي', OrderIndex: 2, SectorId: '2' },
            { Id: 8, Goal: 'تعزيز جودة الأبحاث ومخرجات النشر', OrderIndex: 3, SectorId: '2' },
            { Id: 9, Goal: 'تطوير معامل ومنشآت بحثية متقدمة', OrderIndex: 4, SectorId: '2' },
            { Id: 10, Goal: 'تشجيع المبادرات البحثية متعددة التخصصات', OrderIndex: 5, SectorId: '2' }
          ]
        };
      case '3':
        return {
          Id: '3',
          Name: 'قطاع خدمة المجتمع وتنمية البيئة',
          AboutSector: {
            Id: 3,
            Title: 'عن القطاع',
            About: 'يساهم قطاع خدمة المجتمع وتنمية البيئة في خدمة المجتمع المحلي وتحقيق التنمية المستدامة. ينظم القطاع برامج توعوية، ومبادرات بيئية، وشراكات مع منظمات المجتمع لتعزيز الوعي الصحي والمسؤولية البيئية.',
            SectorId: '3'
          },
          SectorImages: [
            {
              Id: 3,
              Field: 'MainImage',
              UrlPath: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
              SectorId: '3'
            }
          ],
          Statistics: [
            { Id: 9, Title: 'المشروعات المجتمعية', Count: 40, SectorId: '3' },
            { Id: 10, Title: 'الشراكات', Count: 15, SectorId: '3' },
            { Id: 11, Title: 'المتطوعون', Count: 500, SectorId: '3' },
            { Id: 12, Title: 'حملات التوعية', Count: 25, SectorId: '3' }
          ],
          Director: {
            Id: 3,
            Name: 'د. أحمد محمود الراشد',
            Title: 'مدير قطاع خدمة المجتمع وتنمية البيئة',
            Message: 'يكرس قطاعنا جهوده لردم الفجوة بين الجامعة والمجتمع. من خلال برامجنا ومبادراتنا المختلفة، نسعى لتحقيق تأثير إيجابي على الصحة العامة والتنمية المستدامة في المجتمعات المحلية والإقليمية.',
            ImageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
            SectorId: '3'
          },
          Vision: {
            Id: 3,
            Vision: 'أن يكون نموذجًا في المشاركة المجتمعية في التعليم الطبي، وتعزيز التنمية المستدامة وتحسين نتائج الصحة المجتمعية.',
            SectorId: '3'
          },
          Mission: {
            Id: 3,
            Mission: 'الانخراط مع المجتمع من خلال التوعية الصحية، والحفاظ على البيئة، والشراكات التعاونية التي تعزز الصحة العامة وتشجع على الممارسات المستدامة.',
            SectorId: '3'
          },
          Goals: [
            { Id: 11, Goal: 'زيادة برامج التوعية الصحية والمجتمعية', OrderIndex: 1, SectorId: '3' },
            { Id: 12, Goal: 'تطوير مبادرات بيئية مستدامة', OrderIndex: 2, SectorId: '3' },
            { Id: 13, Goal: 'تعزيز الشراكات مع المؤسسات المحلية', OrderIndex: 3, SectorId: '3' },
            { Id: 14, Goal: 'تشجيع التطوع والمشاركة المدنية بين الطلاب', OrderIndex: 4, SectorId: '3' },
            { Id: 15, Goal: 'متابعة وتقييم الأثر المجتمعي لبرامجنا', OrderIndex: 5, SectorId: '3' }
          ]
        };
      case '4':
        return {
          Id: '4',
          Name: 'قطاع الأمين العام للجامعة',
          AboutSector: {
            Id: 4,
            Title: 'عن القطاع',
            About: 'قطاع الأمين العام للجامعة مسؤول عن الشؤون الإدارية والمالية للجامعة. يدير السياسات الجامعية، والشؤون القانونية، والموارد البشرية، ويضمن الالتزام بالمتطلبات التنظيمية.',
            SectorId: '4'
          },
          SectorImages: [
            {
              Id: 4,
              Field: 'MainImage',
              UrlPath: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
              SectorId: '4'
            }
          ],
          Statistics: [
            { Id: 13, Title: 'عدد العاملين الإداريين', Count: 500, SectorId: '4' },
            { Id: 14, Title: 'عدد الإدارات المُدارة', Count: 20, SectorId: '4' },
            { Id: 15, Title: 'السياسات المُنفذة', Count: 150, SectorId: '4' },
            { Id: 16, Title: 'المراجعات والالتزام', Count: 12, SectorId: '4' }
          ],
          Director: {
            Id: 4,
            Name: 'د. سارة عبد الله الفايد',
            Title: 'الأمين العام للجامعة',
            Message: 'باعتبارنا العمود الفقري الإداري للجامعة، فإننا نحرص على ضمان سير العمليات بسلاسة والالتزام بجميع المعايير التنظيمية. يعمل فريقنا المتميز بلا كلل لدعم التميز الأكاديمي والحفاظ على أعلى معايير الحوكمة.',
            ImageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
            SectorId: '4'
          },
          Vision: {
            Id: 4,
            Vision: 'أن يكون قطاعًا إداريًا نموذجيًا يدعم التميز الأكاديمي من خلال الحوكمة الفعّالة والممارسات الإدارية المبتكرة.',
            SectorId: '4'
          },
          Mission: {
            Id: 4,
            Mission: 'تقديم دعم إداري شامل، وضمان الالتزام التنظيمي، وتحسين عمليات الجامعة لتسهيل الأنشطة الأكاديمية والبحثية.',
            SectorId: '4'
          },
          Goals: [
            { Id: 16, Goal: 'تبسيط العمليات والإجراءات الإدارية', OrderIndex: 1, SectorId: '4' },
            { Id: 17, Goal: 'ضمان الالتزام بالمعايير الوطنية والدولية', OrderIndex: 2, SectorId: '4' },
            { Id: 18, Goal: 'تطوير برامج التدريب والتأهيل للموظفين', OrderIndex: 3, SectorId: '4' },
            { Id: 19, Goal: 'تنفيذ مبادرات التحول الرقمي', OrderIndex: 4, SectorId: '4' },
            { Id: 20, Goal: 'تعزيز التواصل والمشاركة مع أصحاب المصلحة', OrderIndex: 5, SectorId: '4' }
          ]
        };
      default:
        return this.getMockSector('1');
    }
  }

  }




