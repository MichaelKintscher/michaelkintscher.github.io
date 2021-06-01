import { Component, OnInit } from '@angular/core';

// Custom types
import { ShowcaseSourceInterface } from '../../types/ShowcaseSource.interface';

@Component({
  selector: 'app-showcase-container',
  templateUrl: './showcase-container.component.html',
  styleUrls: ['./showcase-container.component.css']
})
export class ShowcaseContainerComponent implements OnInit {

  // Properties
  showcaseData: ShowcaseSourceInterface[] = [];

  constructor() { }

  ngOnInit(): void {

    // Populate the showcase data.
    this.showcaseData = [
      {
        "title": "Writing",
        "description": "I write to share my thoughts and experiences and to tell my story.",
        "imageSources": [
          '../../assets/test-image1.jpg',
          '../../assets/test-image2.jpg',
          '../../assets/test-image3.jpg'
        ]
      },
      {
        "title": "YouTube",
        "description": "Videos are my way of teaching through educational and informative content.",
        "imageSources": [
          '../../assets/test-image1.jpg',
          '../../assets/test-image2.jpg',
          '../../assets/test-image3.jpg'
        ]
      },
      {
        "title": "Research",
        "description": "My research interests include collaboration software, graphics, and data visualization!",
        "imageSources": [
          '../../assets/test-image1.jpg',
          '../../assets/test-image2.jpg',
          '../../assets/test-image3.jpg'
        ]
      },
      {
        "title": "Game Dev",
        "description": "Game development is an opportunity for me to build meaingful experiences!",
        "imageSources": [
          '../../assets/test-image1.jpg',
          '../../assets/test-image2.jpg',
          '../../assets/test-image3.jpg'
        ]
      }
    ];
  }

}
