import { Component, OnInit } from '@angular/core';
import { SectorStatisticsComponent } from "../statistics/statistics.component";
import { AboutSectorComponent } from "../about-sector/about-sector.component";
import { SectorImageComponent } from "../sector-Image/sector-Image.component";
import { AboutSector, SectorImage ,Statistic} from '../../../../Models/sectors';
import { ActivatedRoute } from '@angular/router';
import { SectorService } from '../../../../services/sector.service';

@Component({
  selector: 'app-parent-about-sector',
  imports: [SectorStatisticsComponent, AboutSectorComponent, SectorImageComponent],
  templateUrl: './parent-about-sector.component.html',
  styleUrls: ['./parent-about-sector.component.css']
})
export class ParentAboutSectorComponent implements OnInit {
sectorId!: number;
  aboutInfo!: AboutSector;
  image!: SectorImage;
  stats: Statistic[] = [];

  constructor(
    private route: ActivatedRoute,
    private sectorService: SectorService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.sectorId = +params['id'];
      this.loadData();
    });
  }

  loadData() {
    this.aboutInfo = {
      Id: 1,
      About: 'This is a descriptive text about the sector, explaining its importance and objectives.',
      Title: 'About the Sector',
      SectorId: this.sectorId.toString()
    };
    this.image = {
      Id: 1,
      Field: 'main',
      UrlPath: 'assets/slider1.jpeg',
      SectorId: this.sectorId.toString()
    };
    this.stats = [
      { Id: 1, Title: 'Number of Employees', Count: 150, SectorId: this.sectorId.toString() },
      { Id: 2, Title: 'Number of Projects', Count: 25, SectorId: this.sectorId.toString() },
      { Id: 3, Title: 'Number of Students', Count: 1200, SectorId: this.sectorId.toString() }
    ];
  }
}
