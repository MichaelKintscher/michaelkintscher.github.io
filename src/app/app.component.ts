import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Properties
  title = 'michaelkintscher-github-io';
  Tabs: any[] = [{ name: 'Home', type: 'home' },
    { name: 'Research', type: 'research' },
    { name: 'Publications', type: 'publications' },
    { name: 'Teaching', type: 'teaching' },
    { name: 'Service', type: 'service' }];

  tab = this.Tabs[0];

}
