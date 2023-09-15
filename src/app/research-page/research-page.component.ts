import { Component, Input, OnInit } from '@angular/core';

// Custom types
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ResearchAreaInterface } from '../../types/ResearchArea.interface';
import { FileGetterService } from '../file-getter.service';

@Component({
  selector: 'app-research-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.css']
})
export class ResearchPageComponent implements OnInit {

  @Input() dataSource = '';
  researchAreas: ResearchAreaInterface[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private fileGetterService: FileGetterService) { }

  async ngOnInit(): Promise<void> {

    // Populate the showcase data.
    if (this.dataSource != '') {
      this.getResearchAreas();
    }
    else {
      console.warn("Research-Page property 'dataSource' not set!");
    }
  }

  async getResearchAreas() {

    // Declare the list of data.
    const rawData: ResearchAreaInterface[] = [];

    // Get the data from the specified data source.
    this.fileGetterService.getFile(this.dataSource)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        for (let element of data["items"]) {
          rawData.push(element);
        }

        // Assign the resulting list to the research areas property.
        this.researchAreas = rawData;
      });
  }
}
