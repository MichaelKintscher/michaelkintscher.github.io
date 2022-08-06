import { Component, Input, OnInit } from '@angular/core';

// Custom types
import { ShowcaseSourceInterface } from '../../types/ShowcaseSource.interface';
import { ContentCardDataInterface } from '../../types/ContentCardData.interface';
import { YoutubeService } from '../youtube.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { YouTubeDataV3 } from '../../types/YouTubeDataV3.interface';
import { YoutubeUtil } from '../utilities/youtube-util';
import { FileGetterService } from '../file-getter.service';

@Component({
  selector: 'app-showcase-container',
  templateUrl: './showcase-container.component.html',
  styleUrls: ['./showcase-container.component.css']
})
export class ShowcaseContainerComponent implements OnInit {

  // Properties
  @Input() dataSource = '';

  showcaseData: ShowcaseSourceInterface[] = [];
  videoCardData: any[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private youTubeService: YoutubeService, private fileGetterService: FileGetterService) { }

  
  async ngOnInit(): Promise<void> {

    // Populate the showcase data.
    if (this.dataSource != '') {
      this.getShowcaseData();
    }
    else {
      console.warn("Showcase-Container property 'dataSource' not set!");
    }

    // UNCOMMENT THIS TO USE YOUTUBE API
    //await this.getYouTubeData();
    //console.log(this.videoCardData);
    //console.log("hi2");
  }

  // UNCOMMENT THIS WHEN NOT USING YOUTUBE API
  //ngOnInit(): void {
  //  this.populateShowcaseData();
  //}

  async getShowcaseData() {
    const rawShowcaseData: ShowcaseSourceInterface[] = [];

    this.fileGetterService.getFile(this.dataSource)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        for (let element of data["showcaseData"]) {
          rawShowcaseData.push(element);
          //console.log(element);
        }
        //console.log(rawShowcaseData);

        this.showcaseData = rawShowcaseData;
      });
  }

  //async getYouTubeData() {
  //  // Refer to sample here:
  //  const videos: YouTubeDataV3[] = [];

  //  this.youTubeService.getVideosForChanel("UC4gfAPs8PsNyHnPX1cMl-WQ", 3)
  //    .pipe(takeUntil(this.unsubscribe$))
  //    .subscribe(lista => {
  //      for (let element of lista["items"]) {
  //        videos.push(element);
  //      }

  //      this.videoCardData = YoutubeUtil.extractCardData(videos, 20, 100);

  //      console.log(this.videoCardData);
  //      this.populateShowcaseData();
  //    });

  //  console.log("hi3");
  //}

  //populateShowcaseData() {

  //  this.showcaseData = content;
  //}

}
