import { AfterViewInit, Component } from '@angular/core';
import { Event, Router } from '@angular/router';

declare function finishJsSetup(): void;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
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

  constructor(private readonly router: Router) {

    // this.router.events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {

    // });
  }

  ngAfterViewInit(): void {
    // Run the function from the js code AFTER the app component content is loaded.
    finishJsSetup();
  }

}
