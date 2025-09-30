import { Component, Input, OnInit } from '@angular/core';
import { SectorImage } from '../../../../Models/sectors';

@Component({
  selector: 'app-sector-Image',
  templateUrl: './sector-Image.component.html',
  styleUrls: ['./sector-Image.component.css']
})
export class SectorImageComponent implements OnInit {
@Input() image!: SectorImage; 
  constructor() { }

  ngOnInit() {
  }

}
