import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// Custom types
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PublicationInterface } from '../../../types/Publication.interface';
import { FileGetterService } from '../../services/file-getter.service';

@Component({
    selector: 'app-publications-page',
    templateUrl: './publications-page.component.html',
    styleUrls: ['./publications-page.component.css'],
    standalone: false
})
export class PublicationsPageComponent implements OnInit {

  navDisplayTitle: string = "Publications";
  @Input() dataSource = './assets/content-data/publications-details.json';
  @Output() contentLoaded = new EventEmitter();
  fullPapers: PublicationInterface[] = [];
  contestEntries: PublicationInterface[] = [];
  otherPublications: PublicationInterface[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private fileGetterService: FileGetterService) { }

  async ngOnInit(): Promise<void> {

    // Populate the showcase data.
    if (this.dataSource != '') {
      this.getPublications();
    }
    else {
      console.warn("Publications-Page property 'dataSource' not set!");
    }
  }

  async getPublications() {

    // Declare the list of data.
    const rawData: PublicationInterface[] = [];

    // Get the data from the specified data source.
    this.fileGetterService.getFile(this.dataSource)
      .pipe(
        takeUntil(this.unsubscribe$),
        finalize(() => {
          console.log("Publications Page loaded!");
          this.contentLoaded.emit();
        })
      )
      .subscribe(data => {
        for (let element of data["items"]) {
          rawData.push(element);
        }

        // Assign the resulting list to the respective publications properties.
        this.fullPapers = rawData.filter((pub) => pub.category === 'Full Paper');
        this.contestEntries = rawData.filter((pub) => pub.category === 'Contest Entry');
        this.otherPublications = rawData.filter((pub) => pub.category === 'Thesis');
      });
  }

}
