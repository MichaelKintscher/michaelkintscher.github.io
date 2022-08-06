import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-tile',
  templateUrl: './education-tile.component.html',
  styleUrls: ['./education-tile.component.css']
})
export class EducationTileComponent implements OnInit {

  @Input() degreeName = "Degree";
  @Input() year = "Year";
  @Input() subject = "Subject";
  @Input() institution = "Institution";

  constructor() { }

  ngOnInit(): void {
  }

}
