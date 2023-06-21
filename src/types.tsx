export interface Exercise {
  id: number;
  name: string;
  target: string;
  equipment: string;
  bodyPart: string;
  gifUrl: string;
}

export interface YoutubeVideo {
  video: {
    channelId: string;

    channelName: string;
    description: string;

    lengthText: string;

    publishedTimeText: string;

    thumbnails: {
      height: number;
      url: string;
      width: number;
    }[];

    title: string;
    videoId: string;
    viewCountText: string;
  };
}

export interface BodyPart {
  id: number;
  name: string;
}
