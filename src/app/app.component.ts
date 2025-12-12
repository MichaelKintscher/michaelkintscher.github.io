import { AfterViewInit, Component, inject, EventEmitter } from '@angular/core';
import { Event, Router, NavigationEnd } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

declare function finishJsSetup(): void;
declare function closeJSPopups(): void;

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
  private fragmentToScrollTo: string = "";

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
        var routeUrl = event.url.substring(1);
        var routePieces = routeUrl.split("#");

        // Strip any fragments.
        var routePath = routePieces[0];

        var route = this.router.config.filter(r => r.path == routePath)[0];
        this.navDisplayTitle = routePath != "" ? route.title as string : "Home";

        // Close any popups.
        closeJSPopups();
      }
    });
  }

  ngAfterViewInit(): void {

  }

  // Fires when the router outlet is activated.
  public onRouterOutletActivate(event : any) {
    console.log(event);

    // Subscribe to the components loaded event.
    event.contentLoaded.subscribe(this.onPageComponentsLoaded);
  }

  private onPageComponentsLoaded() {
    console.log("we done!");
    finishJsSetup();
  }

}
