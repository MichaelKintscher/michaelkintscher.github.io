import { Component, Input, OnInit } from '@angular/core';

// Custom types
import { ShowcaseListItemInterface } from '../../types/ShowcaseListItem.interface';

@Component({
  selector: 'app-list-showcase',
  templateUrl: './list-showcase.component.html',
  styleUrls: ['./list-showcase.component.css']
})
export class ListShowcaseComponent implements OnInit {

  // Properties
  @Input() title = 'Title';
  @Input() description = 'A breif description of this showcase!';
  listData: ShowcaseListItemInterface[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listData = [
      {
        position: "Instructor of Record",
        course: "Principles of Programming"
      },
      {
        position: "Graduate Student Assistant",
        course: "Foundations of Algorithms"
      },
      {
        position: "Graduate Student Assistant",
        course: "Graphics for Games"
      },
      {
        position: "Graduate Student Assistant",
        course: "Game Engine Development"
      },
      {
        position: "Graduate Student Assistant",
        course: "Principles of Programming"
      },
      {
        position: "Graduate Student Assistant",
        course: "Principles of Programming"
      }
    ];

    console.log(this.listData);
  }

}
