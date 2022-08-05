import { Component, OnInit } from '@angular/core';

// Custom types
import { ShowcaseSourceInterface } from '../../types/ShowcaseSource.interface';
import { ContentCardDataInterface } from '../../types/ContentCardData.interface';
import { YoutubeService } from '../youtube.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { YouTubeDataV3 } from '../../types/YouTubeDataV3.interface';
import { YoutubeUtil } from '../utilities/youtube-util';

import showcaseData from '../../assets/showcase-content/top-showcase.json';

let content = showcaseData.showcaseData as ShowcaseSourceInterface[];

@Component({
  selector: 'app-showcase-container',
  templateUrl: './showcase-container.component.html',
  styleUrls: ['./showcase-container.component.css']
})
export class ShowcaseContainerComponent implements OnInit {

  // Properties
  showcaseData: ShowcaseSourceInterface[] = [];
  videoCardData: any[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private youTubeService: YoutubeService) { }

  // UNCOMMENT THIS TO USE YOUTUBE API
  //async ngOnInit(): Promise<void> {

  //  // Populate the showcase data.
  //  await this.getYouTubeData();
  //  console.log(this.videoCardData);
  //  console.log("hi2");
  //}

  // UNCOMMENT THIS WHEN NOT USING YOUTUBE API
  ngOnInit(): void {
    this.populateShowcaseData();
  }

  async getYouTubeData() {
    // Refer to sample here:
    const videos: YouTubeDataV3[] = [];

    this.youTubeService.getVideosForChanel("UC4gfAPs8PsNyHnPX1cMl-WQ", 3)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          videos.push(element);
        }

        this.videoCardData = YoutubeUtil.extractCardData(videos, 20, 100);

        console.log(this.videoCardData);
        this.populateShowcaseData();
      });

    console.log("hi3");
  }

  populateShowcaseData() {

    this.showcaseData = content;
  }

}
