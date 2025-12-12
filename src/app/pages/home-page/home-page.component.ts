import { AfterViewInit, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: false
})
export class HomePageComponent implements OnInit, AfterViewInit {

  @Output() contentLoaded = new EventEmitter();
  // Add each of the components the "onComponentContentLoaded()" listener is subscribed to.
  //    Use the component's "sectionId" property.
  private componentsLoaded: { [id: string] : boolean } = {
    "two": false,
    "three": false
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log("home initialized!");
  }

  onComponentContentLoaded(id: string) {
    console.log("responding to " + id + "!");

    // Update the status of the component that initiated the event.
    this.componentsLoaded[id] = true;

    // If all components are loaded, then emit the content loaded event.
    if (Object.values(this.componentsLoaded)
      .filter((i) => i == false)
      .length == 0) {
        console.log("all components loaded on Home Page!");
        // Emit an event to notify that this view has been loaded.
        this.contentLoaded.emit();
      }
  }

}
