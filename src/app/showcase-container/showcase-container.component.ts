import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-container',
  templateUrl: './showcase-container.component.html',
  styleUrls: ['./showcase-container.component.css']
})
export class ShowcaseContainerComponent implements OnInit {

  // Properties
  showcase1Title = 'Writing';
  showcase2Title = 'YouTube';
  showcase3Title = 'Research';
  showcase4Title = 'Game Dev';

  showcase1Description = 'I write to share my thoughts and experiences and to tell my story.';
  showcase2Description = 'Videos are my way of teaching through educational and informative content.';
  showcase3Description = 'My research interests include collaboration software, graphics, and data visualization!';
  showcase4Description = 'Game development is an opportunity for me to build meaingful experiences!';

  imageSource1 = '../../assets/test-image1.jpg';
  imageSource2 = '../../assets/test-image2.jpg';
  imageSource3 = '../../assets/test-image3.jpg';
  imageSource4 = '../../assets/test-image1.jpg';
  imageSource5 = '../../assets/test-image2.jpg';
  imageSource6 = '../../assets/test-image3.jpg';
  imageSource7 = '../../assets/test-image1.jpg';
  imageSource8 = '../../assets/test-image2.jpg';
  imageSource9 = '../../assets/test-image3.jpg';
  imageSource10 = '../../assets/test-image1.jpg';
  imageSource11 = '../../assets/test-image2.jpg';
  imageSource12 = '../../assets/test-image3.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
