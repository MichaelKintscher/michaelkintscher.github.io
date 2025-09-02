import { AfterViewInit, Component } from '@angular/core';

declare function setupSideBar(): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  // Properties
  title = 'michaelkintscher-github-io';
  Tabs: any[] = [{ name: 'Home', type: 'home' },
    { name: 'Research', type: 'research' },
    { name: 'Publications', type: 'publications' },
    { name: 'Teaching', type: 'teaching' },
    { name: 'Service', type: 'service' }];

  tab = this.Tabs[0];

  ngAfterViewInit(): void {
    // Run the function from the js code AFTER the app component content is loaded.
    setupSideBar();
  }

}
