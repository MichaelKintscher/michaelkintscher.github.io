import { Component, Input, OnInit } from '@angular/core';

// Custom types
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ListItemInterface } from 'src/types/ListItem.interface';
import { FileGetterService } from '../../services/file-getter.service';

@Component({
    selector: 'app-list-section',
    templateUrl: './list-section.component.html',
    styleUrls: ['./list-section.component.css'],
    standalone: false
})
export class ListSectionComponent implements OnInit {

  // Properties
  @Input() sectionId = '';
  @Input() title = 'Title';
  @Input() description = "Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.";
  @Input() dataSource = '';
  listData: ListItemInterface[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private fileGetterService: FileGetterService) { }

  async ngOnInit(): Promise<void> {

    // Populate the list data.
    if (this.dataSource != '') {
      this.getListData();
    }
    else {
      console.warn("List-Section property 'dataSource' not set!");
    }
  }

  async getListData() {
      const rawListData: ListItemInterface[] = [];
  
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
