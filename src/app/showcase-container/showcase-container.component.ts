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

  constructor() { }

  ngOnInit(): void {
  }

}
