import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vision-mission',
  imports:[CommonModule],
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.css']
})
export class VisionMissionComponent {
  visionText: string = `Luxor Medicine is a distinguished academic and clinical edifice that effectively contributes to the development of medical science and practice locally and internationally, and makes a positive impact on the health of society in providing comprehensive and integrated health care at the highest international standards`;

  missionPoints: string[] = [
    'To build and graduate a physician with a solid scientific background and outstanding clinical skills',
    'Local, regional and global leadership in medical training and an innovative learning environment',
    'Scientific research and scientific contribution locally and internationally',
    'Effective contribution to achieving comprehensive development in the community and improving the health of the community in the integration and application of scientific research with training as well as effective participation in all matters related to community health, including preventive, therapeutic and legislative measures.'
  ];

  connectionPoints: string[] = [
    'The College of Medicine contributes to excellence in medical education and scientific research, leading to a competitive economy based on innovation and knowledge.',
    'Assisting the Faculty of Medicine through its vision of serving societal needs by graduating distinguished doctors to serve the community and improve healthcare for Egyptians, as well as harnessing scientific research to solve medical problems in Egyptian society, which leads to achieving sustainable development and improving the quality of life for Egyptians.',
    'The Faculty of Medicine at Luxor University serves a large segment of the poor and middle classes and provides them with distinguished medical services, which contributes to achieving social justice and the right of all groups to obtain distinguished medical services.'
  ];
}
