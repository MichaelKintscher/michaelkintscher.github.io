import { Component, Input, OnInit } from '@angular/core';

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
export class ResearchPageComponent implements OnInit {

  navDisplayTitle: string = "Research";

  constructor() { }

  ngOnInit(): void {
  }

}
