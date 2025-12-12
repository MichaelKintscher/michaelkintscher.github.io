import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-cv-page',
    templateUrl: './cv-page.component.html',
    styleUrls: ['./cv-page.component.css'],
    standalone: false
})
export class CvPageComponent implements OnInit {
  
  navDisplayTitle: string = "CV";
  @Output() contentLoaded = new EventEmitter();
  // Add each of the components the "onComponentContentLoaded()" listener is subscribed to.
  //    Use the component's "sectionId" property.
  private componentsLoaded: { [id: string] : boolean } = {
    "education": false,
    "appointments": false,
    "publications": false,
    "service": false,
    "teaching": false,
    "honors": false
  };

  constructor() { }

  ngOnInit(): void {
  }

  onComponentContentLoaded(id: string) {
    console.log("responding to " + id + "!");

    // Update the status of the component that initiated the event.
    this.componentsLoaded[id] = true;

    // If all components are loaded, then emit the content loaded event.
    if (Object.values(this.componentsLoaded)
      .filter((i) => i == false)
      .length == 0) {
        console.log("all components loaded on CV Page!");
        // Emit an event to notify that this view has been loaded.
        this.contentLoaded.emit();
      }
  }

}
