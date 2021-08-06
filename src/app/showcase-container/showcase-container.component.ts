import { Component, OnInit } from '@angular/core';

// Custom types
import { ShowcaseSourceInterface } from '../../types/ShowcaseSource.interface';
import { ContentCardDataInterface } from '../../types/ContentCardData.interface';
import { YoutubeService } from '../youtube.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { YouTubeDataV3 } from '../../types/YouTubeDataV3.interface';
import { YoutubeUtil } from '../utilities/youtube-util';

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

  async ngOnInit(): Promise<void> {

    // Populate the showcase data.
    await this.getYouTubeData();
    console.log(this.videoCardData);
    console.log("hi2");
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
    this.showcaseData = [
      {
        "title": "Writing",
        "description": "I write to share my thoughts and experiences and to tell my story.",
        "cardData": [
          {
            "title": "Medium",
            "content": ("Entertainer. Storyteller. Thinker. I draw from past experience as an LGBTQ+ person and team leader to explore our world with others through new perspective").substring(0,100) + "...",
            "imageSource": 'https://miro.medium.com/fit/c/197/197/1*lJBg6kaa3ksF3EnQwDk2qg.png'
          },
          {
            "title": "Blog",
            "content": ("For… sometimes I’ll see an old picture of me?. It’s staring at me…. but there’s an emptiness to its eyes – a hole, a void, something incomplete.").substring(0, 100) + "...",
            "imageSource": '../../assets/test-image2.jpg'
          },
          {
            "title": "LinkedIn",
            "content": ("I've always been an architect and a builder, but I didn't always understand the value of the people in the system.").substring(0, 100) + "...",
            "imageSource": 'https://media-exp1.licdn.com/dms/image/C5603AQHpOp-YVId-XA/profile-displayphoto-shrink_800_800/0/1619819917543?e=1633564800&v=beta&t=yhkeGCCwH1ueeTPC2Cy4C5Ep_AnsbiojNEgcigcYCO0'
          }
        ]
      },
      {
        "title": "YouTube",
        "description": "Videos are my way of teaching through educational and informative content.",
        "cardData": this.videoCardData
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

}
