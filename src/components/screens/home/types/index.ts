export interface IImagesResponse {
  items: {
    id: number;
    stats: {
      commentCount: number;
      cryCount: number;
      dislikeCount: number;
      heartCount: number;
      laughCount: number;
      likeCount: number;
    };
    url: string;
    username: string;
    width: number;
  }[];
  metadata?: {
    nextCursor: string;
    nextPage: string;
  }
};