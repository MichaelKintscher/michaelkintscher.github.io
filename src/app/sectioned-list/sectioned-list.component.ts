import { Component, Input, OnInit } from '@angular/core';

// Custom types
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FileGetterService } from '../file-getter.service';
import { SectionedStringItemsInterface } from 'src/types/SectionedStringItems.interface';

@Component({
  selector: 'app-sectioned-list',
  templateUrl: './sectioned-list.component.html',
  styleUrls: ['./sectioned-list.component.css']
})
export class SectionedListComponent implements OnInit {

  // Properties.
  @Input() title = 'Title';
  @Input() description = 'A breif description of this showcase!';
  @Input() dataSource = '';
  @Input() boldText = '';
  listData: SectionedStringItemsInterface[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private fileGetterService: FileGetterService) { }

  async ngOnInit(): Promise<void> {
    // Populate the list data.
    if (this.dataSource == '') {
      console.warn("Sectioned-List property 'dataSource' not set!");
      return;
    }
    
    // Get the data.
    await this.getListData();
  }

  async getListData() {
    const rawListData: SectionedStringItemsInterface[] = [];

    this.fileGetterService.getFile(this.dataSource)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        for (let element of data["sections"]) {
          rawListData.push(element);
          console.log(element);
        }
        //console.log(rawListData);

        this.listData = rawListData;

        // Bold the bolded text, if the option is set.
        if (this.boldText != '') {
          this.applyBoldText();
        }
      });
    }

    applyBoldText() {

      // Bold the bolded text.
      this.listData = this.listData.map(d => {

        // Map the items for the section.
        d.items = d.items.map(item => {

          // Insert the bold tags into the string.
          let startIndex: number = item.text.search(this.boldText);
          let endIndex: number = startIndex + this.boldText.length;
          item.text = item.text.slice(0, startIndex) + "<b>" + item.text.slice(startIndex, endIndex) + "</b>" + item.text.slice(endIndex, item.text.length);
          //console.log(item.text);
          return item;
        });
        
        return d;
      });
    }
}
