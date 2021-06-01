import { Component, Input, OnInit } from '@angular/core';

// Custom types
import { ShowcaseSourceInterface } from '../../types/ShowcaseSource.interface';

@Component({
  selector: 'app-content-showcase',
  templateUrl: './content-showcase.component.html',
  styleUrls: ['./content-showcase.component.css']
})
export class ContentShowcaseComponent implements OnInit {

  // Properties
  @Input() title = 'Title';
  @Input() description = 'A breif description of this showcase!';
  @Input() imageSource1 = '';
  @Input() imageSource2 = '';
  @Input() imageSource3 = '';
  @Input() imageSources: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
