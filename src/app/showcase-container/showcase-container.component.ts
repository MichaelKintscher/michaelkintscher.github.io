import { Component, OnInit } from '@angular/core';

// Custom types
import { ShowcaseSourceInterface } from '../../types/ShowcaseSource.interface';
import { ContentCardDataInterface } from '../../types/ContentCardData.interface';
import { YoutubeService } from '../youtube.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-showcase-container',
  templateUrl: './showcase-container.component.html',
  styleUrls: ['./showcase-container.component.css']
})
export class ShowcaseContainerComponent implements OnInit {

  // Properties
  showcaseData: ShowcaseSourceInterface[] = [];
  videos: any[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private youTubeService: YoutubeService) { }

  ngOnInit(): void {

    // Populate the showcase data.
    this.getYouTubeData();
    console.log(this.videos);

    this.showcaseData = [
      {
        "title": "Writing",
        "description": "I write to share my thoughts and experiences and to tell my story.",
        "cardData": [
          {
            "title": "Card A1",
            "content": "Aa",
            "imageSource": '../../assets/test-image1.jpg'
          },
          {
            "title": "Card B1",
            "content": "Bb",
            "imageSource": '../../assets/test-image2.jpg'
          },
          {
            "title": "Card C1",
            "content": "Cc",
            "imageSource": '../../assets/test-image3.jpg'
          }
        ]
      },
      {
        "title": "YouTube",
        "description": "Videos are my way of teaching through educational and informative content.",
        "cardData": [
          {
            "title": "Card A2",
            "content": "Aa2",
            "imageSource": '../../assets/test-image1.jpg'
          },
          {
            "title": "Card B2",
            "content": "Bb2",
            "imageSource": '../../assets/test-image2.jpg'
          },
          {
            "title": "Card C2",
            "content": "Cc2",
            "imageSource": '../../assets/test-image3.jpg'
          }
        ]
      },
      {
        "title": "Research",
        "description": "My research interests include collaboration software, graphics, and data visualization!",
        "cardData": [
          {
            "title": "Card A3",
            "content": "Aa3",
            "imageSource": '../../assets/test-image1.jpg'
          },
          {
            "title": "Card B3",
            "content": "Bb3",
            "imageSource": '../../assets/test-image2.jpg'
          },
          {
            "title": "Card C3",
            "content": "Cc3",
            "imageSource": '../../assets/test-image3.jpg'
          }
        ]
      },
      {
        "title": "Game Dev",
        "description": "Game development is an opportunity for me to build meaingful experiences!",
        "cardData": [
          {
            "title": "Card A4",
            "content": "Aa4",
            "imageSource": '../../assets/test-image1.jpg'
          },
          {
            "title": "Card B4",
            "content": "Bb4",
            "imageSource": '../../assets/test-image2.jpg'
          },
          {
            "title": "Card C4",
            "content": "Cc4",
            "imageSource": '../../assets/test-image3.jpg'
          }
        ]
      }
    ];
  }

  async getYouTubeData() {
    // Refer to sample here:

    this.youTubeService.getVideosForChanel("UC4gfAPs8PsNyHnPX1cMl-WQ", 3)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element)
        }
      });
  }

}
