import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-showcase',
  templateUrl: './content-showcase.component.html',
  styleUrls: ['./content-showcase.component.css']
})
export class ContentShowcaseComponent implements OnInit {

  // Properties
  @Input() title = 'Title';
  @Input() description = 'A breif description of this showcase!'

  constructor() { }

  ngOnInit(): void {
  }

}
