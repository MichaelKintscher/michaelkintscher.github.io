import { Component, Input, OnInit } from '@angular/core';

// Custom types
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ShowcaseListItemInterface } from '../../types/ShowcaseListItem.interface';
import { FileGetterService } from '../file-getter.service';


@Component({
  selector: 'app-list-showcase',
  templateUrl: './list-showcase.component.html',
  styleUrls: ['./list-showcase.component.css']
})
export class ListShowcaseComponent implements OnInit {

  // Properties
  @Input() title = 'Title';
  @Input() description = 'A breif description of this showcase!';
  @Input() dataSource = '';
  @Input() fullWidth = true;
  listData: ShowcaseListItemInterface[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private fileGetterService: FileGetterService) { }

  async ngOnInit(): Promise<void> {

    // Populate the showcase data.
    if (this.dataSource != '') {
      this.getShowcaseData();
    }
    else {
      console.warn("List-Showcase property 'dataSource' not set!");
    }
  }

  async getShowcaseData() {
    const rawListData: ShowcaseListItemInterface[] = [];

    this.fileGetterService.getFile(this.dataSource)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        for (let element of data["listdata"]) {
          rawListData.push(element);
          //console.log(element);
        }
        //console.log(rawListData);

        this.listData = rawListData;
      });
  }
}
