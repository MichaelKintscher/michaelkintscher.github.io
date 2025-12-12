import { AfterViewInit, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// Custom types
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ResearchAreaInterface } from '../../../types/ResearchArea.interface';
import { FileGetterService } from '../../services/file-getter.service';

@Component({
    selector: 'app-research-page',
    templateUrl: './research-page.component.html',
    styleUrls: ['./research-page.component.css'],
    standalone: false
})
export class ResearchPageComponent implements OnInit, AfterViewInit {

  navDisplayTitle: string = "Research";
  @Output() contentLoaded = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log("Research Page loaded!");
    // Emit an event to notify that this view has been loaded.
    this.contentLoaded.emit();
  }

}
