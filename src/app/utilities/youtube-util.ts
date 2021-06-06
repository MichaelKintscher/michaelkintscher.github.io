import { YouTubeDataV3 } from "../../types/YouTubeDataV3.interface";

export class YoutubeUtil {

  // Processes the data from the YouTube data v3 API to
  static extractCardData(apiData: YouTubeDataV3[], titleLength: number, contentLength: number) {

    const videoCardData: any[] = [];
    console.log("hi");
    for (const item in apiData) {
      console.log(apiData[item]);
      videoCardData.push({
        "title": apiData[item].snippet.title.substring(0, titleLength) + (apiData[item].snippet.title.length > titleLength ? "..." : ""),
        "content": apiData[item].snippet.description.substring(0, contentLength) + (apiData[item].snippet.description.length > contentLength ? "..." : ""),
        "imageSource": apiData[item].snippet.thumbnails.high.url
      })
    }

    return videoCardData;
  }
}
