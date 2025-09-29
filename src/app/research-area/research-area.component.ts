import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-research-area',
    templateUrl: './research-area.component.html',
    styleUrls: ['./research-area.component.css'],
    standalone: false
})
export class ResearchAreaComponent implements OnInit {

  // Properties
  @Input() title = 'Title';
  @Input() description = 'A brief description of this research area!';
  @Input() question = 'A research question?';
  @Input() imageSource = '';

  constructor() { }

  ngOnInit(): void {
  }

}
