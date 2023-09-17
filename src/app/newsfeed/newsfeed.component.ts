import { Component, Input, OnInit } from '@angular/core';

// Custom types
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NewsInterface } from '../../types/News.interface';
import { FileGetterService } from '../file-getter.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  @Input() dataSource = '';
  newsItems: NewsInterface[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private fileGetterService: FileGetterService) { }

  async ngOnInit(): Promise<void> {

    // Populate the showcase data.
    if (this.dataSource != '') {
      this.getNewsItems();
    }
    else {
      console.warn("Newsfeed property 'dataSource' not set!");
    }
  }

  async getNewsItems() {

    // Declare the list of data.
    const rawData: NewsInterface[] = [];

    // Get the data from the specified data source.
    this.fileGetterService.getFile(this.dataSource)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        for (let element of data["items"]) {
          rawData.push(element);
        }

        // Assign the resulting list to the news items property.
        this.newsItems = rawData;
      });
  }
}
