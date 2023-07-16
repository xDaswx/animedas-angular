export interface AnimeList {
    message: string;
    content: [{
      id: number;
      tag_type: string;
      source: string;
      url: string;
      description: string;
    }];
  }