import { AfterViewInit, Component, inject } from '@angular/core';
import { Event, Router, NavigationEnd } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

declare function finishJsSetup(): void;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {

  // Properties
  private readonly router = inject(Router);
  // @ViewChild('pageTitle') navTitle!: ElementRef;
  navDisplayTitle: string = "Hello";

  title = 'michaelkintscher-github-io';
  Tabs: any[] = [{ name: 'Home', type: 'home' },
    { name: 'Research', type: 'research' },
    { name: 'Publications', type: 'publications' },
    { name: 'Teaching', type: 'teaching' },
    { name: 'Service', type: 'service' }];

  tab = this.Tabs[0];

  constructor() {

    this.router.events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Get the title property of the route that was navigated to.
        var routePath = event.url.substring(1);
        var route = this.router.config.filter(r => r.path == routePath)[0];
        this.navDisplayTitle = routePath != "" ? route.title as string : "Home";
      }
    });
  }

  ngAfterViewInit(): void {
    // Run the function from the js code AFTER the app component content is loaded.
    finishJsSetup();
  }

}
