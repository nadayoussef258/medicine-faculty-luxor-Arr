import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AboutSector, AddSectorAttachmentDto, AddSectorDetailDto, AddSectorDto, AddSectorStatDto, Department, EditSectorAttachmentDto, EditSectorDetailDto, EditSectorStatDto, NavTab, News, SectorBasicInfo, SectorDto, SectorImage, SectorServices, Statistic } from '../Models/sectors';
@Injectable({
  providedIn: 'root'
})
export class SectorService {

  // MOCK DATA ONLY - remove all HttpClient and API_ENDPOINTS usage

  // Sectors
  AddSector(dto: AddSectorDto): Observable<string> {
    return of('تمت الإضافة (Mock)').pipe(delay(500));
  }

  geAlltSectors(): Observable<SectorDto[]> {
    return of([]).pipe(delay(500));
  }

  UpdateSector(dto: AddSectorDto): Observable<string> {
    return of('تم التحديث (Mock)').pipe(delay(500));
  }

  deleteSector(id: string): Observable<string> {
    return of('تم الحذف (Mock)').pipe(delay(500));
  }

  getById(id: string): Observable<AddSectorDto | undefined> {
    // English mock data for sectors
    const mockSectors: { [key: string]: AddSectorDto } = {
      '1': {
        name: 'Education and Student Affairs',
        subTitle: 'Responsible for managing student affairs and the educational process at the university.'
      },
      '2': {
        name: 'Postgraduate Studies and Research',
        subTitle: 'Supervises master’s and doctoral programs and research projects.'
      },
      '3': {
        name: 'Community Service and Environmental Development',
        subTitle: 'Contributes to local community service and sustainable development.'
      },
      '4': {
        name: 'University Secretary General',
        subTitle: 'Responsible for the administrative and financial affairs of the university.'
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

 
  getSectorStats(sectorId: string): Observable<Statistic[]> {
  const mockStats: { [key: string]: Statistic[] } = {
    1: [
      { Id: 1, Title: "عدد الإدارات", Count: 12 },
      { Id: 2, Title: "عدد الطلاب", Count: 15000 },
      { Id: 3, Title: "عدد العاملين", Count: 90 }

    ],
    2: [
      { Id: 1, Title: "برامج ماجستير", Count: 25 },
      { Id: 2, Title: "برامج دكتوراه", Count: 10 },
      { Id: 3, Title: "عدد العاملين", Count: 90 }

    ],
    3: [
      { Id: 1, Title: "مشروعات مجتمعية", Count: 40 },
      { Id: 2, Title: "شراكات", Count: 15 },
      { Id: 3, Title: "عدد العاملين", Count: 90 }

    ],
    4: [
      { Id: 1, Title: "عدد الموظفين", Count: 500 },
      { Id: 2, Title: "عدد الإدارات", Count: 20 },
      { Id: 3, Title: "عدد العاملين", Count: 90 }

    ]
  };
  return of(mockStats[sectorId]);
}
  


  

  




getAllSectorServices(): Observable<SectorServices[]> {
  const mockServices: SectorServices[] = [
    {
      id: '1',
      name: 'استخراج شهادة قيد',
      details: 'خدمة استخراج شهادة قيد للطلاب الحاليين.',
      duration: 'يومان',
      isOnline: true,
      category: 'شهادات',
      fees: 20,
      sectorId: '1',
      applicationUrl: '',
      downloadUrl: '',
      contactPerson: 'موظف شؤون الطلاب',
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
      contactPerson: 'موظف شؤون الطلاب',
      contactPhone: '01000000001'
    }
  ];
  return of(mockServices).pipe(delay(300));
}



getSectorNews(sectorId: string): Observable<News[]> {
  const mockNews: News[] = [
    { id: 1, title: 'بدء التقديم للعام الجديد', summary: 'تم فتح باب التقديم للعام الجامعي الجديد.', image: 'assets/slider2.jpg', date: '2024-08-13', category: 'أكاديمي', readTime: '3 دقائق',    author: 'University Administration'
 },
    { id: 2, title: 'نتائج الامتحانات', summary: 'إعلان نتائج امتحانات الفصل الدراسي الثاني.', image: 'assets/slider3.jpg', date: '2024-08-10', category: 'إعلانات', readTime: '2 دقائق',    author: 'University Administration'
 }
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
}

