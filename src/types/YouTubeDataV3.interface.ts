export interface YouTubeDataV3 {
  etag: string;
  id: Id;
  kind: string;
  snippet: Snippet;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcast: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: ThumbnailCollection;
  title: string;
}

export interface ThumbnailCollection {
  default: Thumbnail;
  high: Thumbnail;
  medium: Thumbnail;
}

export interface Thumbnail {
  height: string;
  url: string;
  width: string;
}
