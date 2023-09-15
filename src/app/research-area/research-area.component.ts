import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-area',
  templateUrl: './research-area.component.html',
  styleUrls: ['./research-area.component.css']
})
export class ResearchAreaComponent implements OnInit {

  // Properties
  @Input() title = 'Title';
  @Input() description = 'A brief description of this research area!';
  @Input() imageSource = '';

  constructor() { }

  ngOnInit(): void {
  }

}
