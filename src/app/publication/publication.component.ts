import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  // Properties
  @Input() title = 'Title';
  @Input() authors:string[] = [];
  @Input() publisher = 'Publisher';
  @Input() description = 'A brief description of this publication!';
  @Input() imageSource = '';
  @Input() doi = '';
  @Input() altLink = '';
  @Input() paperSource = '';
  @Input() supplementalMaterials = '';
  @Input() category = 'Other';

  constructor() { }

  ngOnInit(): void {
  }

}
