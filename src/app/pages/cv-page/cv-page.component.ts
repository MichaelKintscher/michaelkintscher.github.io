import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cv-page',
    templateUrl: './cv-page.component.html',
    styleUrls: ['./cv-page.component.css'],
    standalone: false
})
export class CvPageComponent implements OnInit {
  
  navDisplayTitle: string = "CV";

  constructor() { }

  ngOnInit(): void {
  }

}
